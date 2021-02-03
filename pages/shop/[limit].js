import { GET_ALL_PRODUCTS } from "../../apollo/queries/products";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard.component";
import FilterBar from "../../components/FilterBar.component";

export default function Shop({
  data: {
    productCollection: { items: products },
  },
  loading,
}) {
  const [allProducts, setAllProducts] = useState(products);
  useEffect(() => {
    setAllProducts(products);
  }, [products]);
  return (
    <div className="d-flex">
      <div>
        <FilterBar />
      </div>
      <div className="grid-container">
        {loading ? (
          <div>...loading</div>
        ) : (
          allProducts.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

Shop.getInitialProps = async (ctx) => {
  const {
    apolloClient,
    query: { limit, material, tags_contains_some, soldByThe },
  } = ctx;
  const { data, loading, error } = await apolloClient.query({
    query: GET_ALL_PRODUCTS,
    variables: {
      limit: parseInt(limit),
      material: material,
      tags_contains_some: tags_contains_some,
      soldByThe: soldByThe,
    },
  });

  return {
    data,
    loading,
    error,
  };
};
