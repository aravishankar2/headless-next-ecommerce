import { GET_ALL_PRODUCTS } from "../../apollo/queries/products";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard.component";
import { useRouter } from "next/router";
import FilterBar from "../../components/FilterBar.component";

export default function Shop({
  data: {
    productCollection: { items: products },
  },
  loading,
}) {
  const router = useRouter();

  const [allProducts] = useState(products);

  return (
    <div className="d-flex" onClick={() => console.log(router.query)}>
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
    query: { limit, material, tags_contains_some },
  } = ctx;
  const { data, loading, error } = await apolloClient.query({
    query: GET_ALL_PRODUCTS,
    variables: {
      limit: parseInt(limit),
      material: material,
      tags_contains_some: tags_contains_some,
    },
  });

  return {
    data,
    loading,
    error,
  };
};
