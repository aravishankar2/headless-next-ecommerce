import { GET_ALL_PRODUCTS } from "../../apollo/queries/products";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import ProductCard from "../../components/ProductCard.component";
export default function Shop({
  data: {
    productCollection: { items: products },
  },
  loading,
}) {
  const [allProducts] = useState(products);
  const [limit, setLimit] = useState(20);

  return (
    <div onClick={() => console.log(allProducts)} className="container">
      <div className="grid-container">
        {loading ? (
          <div>...loading</div>
        ) : (
          allProducts
            .sort((a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1))
            .slice(0, limit)
            .map((product, i) => <ProductCard key={i} product={product} />)
        )}
      </div>
      <div className="container d-flex justify-content-center w-100">
        {limit < allProducts.length && (
          <button
            onClick={() => setLimit((prev) => prev + 6)}
            className="btn btn-primary"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

Shop.getInitialProps = async ({ apolloClient }) => {
  const { data, loading, error } = await apolloClient.query({
    query: GET_ALL_PRODUCTS,
  });

  return { 
    data,
    loading,
    error,
  };
};
