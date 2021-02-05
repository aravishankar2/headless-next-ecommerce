import { GET_ALL_PRODUCTS } from "../../apollo/queries/products";
import { useState, useEffect, useRef, useContext } from "react";
import ProductCard from "../../components/ProductCard.component";
import FilterBar from "../../components/FilterBar.component";
import { ParamsContext } from "../../context/params.context";
import { useRouter } from "next/router";
export default function Shop({
  data: {
    productCollection: { items: products },
  },
  loading,
}) {
  const [allProducts, setAllProducts] = useState(products);
  const isInitialMount = useRef(true);
  const { state } = useContext(ParamsContext);
  const router = useRouter();
  useEffect(() => {
    setAllProducts(products);
  }, [products]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      router.push(
        `/shop?${state.material ? "&material=" + state.material : ""}${
          state.soldByThe ? "&soldByThe=" + state.soldByThe : ""
        }${state.limit ? "&limit=" + state.limit : ""}${
          !state.frostProof ? "&frostProof=" + state.frostProof : ""
        }`
      );
    }
  }, [state, state.frostProof]);

  return (
    <div className="d-flex">
      <div>
        <FilterBar />
      </div>
      <div className="grid-container">
        {loading ? (
          <div>...loading</div>
        ) : allProducts.length === 0 ? (
          <div className="container-center">no results found. ༼ ༎ຶ ෴ ༎ຶ༽</div>
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
    query: { limit, material, tags_contains_some, soldByThe, frostProof, frostProof_not },
  } = ctx;
  const { data, loading, error } = await apolloClient.query({
    query: GET_ALL_PRODUCTS,
    variables: {
      limit: parseInt(limit),
      material: material,
      soldByThe: soldByThe,
      tags_contains_some: tags_contains_some,
      frostProof: Boolean(frostProof),
      frostProof_not: Boolean(frostProof_not)
    },
  });

  return {
    data,
    loading,
    error,
  };
};
