import { GET_ALL_PRODUCTS } from "../../queries/products";
import styles from "../../styles/Home.module.css";
import ProductCard from "../../components/ProductCard.component";
export default function Shop({
  data: {
    productCollection: { items: products },
  },
  loading,
}) {
  return (
    <div onClick={() => console.log(products)} className={styles.container}>
      <div className="grid-container">
        {loading ? (
          <div>...loading</div>
        ) : (
          products
            .sort((a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1))
            .map((product, i) => <ProductCard i={i} product={product} />)
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
