import { GET_ALL_PRODUCTS } from "../../apollo/queries/products";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import ProductCard from "../../components/ProductCard.component";
import { useRouter } from "next/router";

export default function Shop({
  data: {
    productCollection: { items: products },
  },
  loading,
}) {
  const router = useRouter();

  const [allProducts] = useState(products);

  return (
    <div className="container" onClick={() => console.log(router.query)}>
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
