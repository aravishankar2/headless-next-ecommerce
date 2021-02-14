import React, { useEffect, useState, useContext } from "react";
import { GET_PRODUCT } from "../../../apollo/queries/product";
import HandleImage from "../../../components/product/ImageSlider.component.jsx";
import { Calculator } from "../../../components/product/Calculator.component.tsx";
import { InfoModal } from "../../../components/product/InfoModal.component.tsx";
import { AiFillTool, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaShoppingCart, FaSnowflake } from "react-icons/fa";
import { client } from "../../../contentful.client";
import { useRouter } from "next/router";
import VariantSelect from "../../../components/product/VariantSelect.component";
import { FilterContext } from "../../../context/filterbar.context";
import PriceBlock from "../../../components/product/PriceBlock.component";
export default function Product({ data: { product }, loading }) {
  const router = useRouter();
  const [selected, setSelected] = useState(router.query.id);
  const [qty, setQty] = useState(1);
  const [options, setOptions] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const { dispatch } = useContext(FilterContext);

  useEffect(() => {
    (() => {
      let arr = product.variantsCollection.items.map(({ sys: { id } }) => id);

      client
        .getEntries({
          content_type: "product",
          "sys.id[in]": arr.join(","),
        })
        .then((entry) => entry)
        .then(({ items }) => {
          setOptions(items);
        });
    })();
  }, [product]);

  useEffect(() => {
    (() =>
      dispatch({
        type: "TOGGLE_SEARCH",
        payload: false,
      }))();
  }, [router.query.id]);

  // This gets the cart items from Snipcart, not sure if the rates api is worth it just yet

  // useEffect(() => {
  // var items = Snipcart.api.items.all();
  // console.log(items)
  // }, [modalShow]);

  let {
    productImage,
    name,
    frostProof,
    soldByThe,
    material,
    productType,
    price,
    squareFootPerPiece,
    variantsCollection,
    squareFootPerBox,
    piecesPerBox,
  } = product;

  return (
    <div className="container mt-4">
      {loading ? (
        <div>...loading</div>
      ) : (
        <div className="row">
          {/* Image + description on the left half */}
          <div className="col-md">
            <HandleImage productImage={productImage} />
          </div>

          {/* The rest of the product info goes here. */}
          <div className="col-md">
            {/* Product Name */}
            <div className="d-flex justify-content-between align-items-start">
              <h2 className="product-page-name">{name}</h2>
              {/* Frost Proof */}
              <span>
                {frostProof ? (
                  <button className="btn d-flex frost-proof-icon">
                    <FaSnowflake />
                  </button>
                ) : null}
              </span>
            </div>

            {/* Product Type (eg. "Hand Painted Terracto Tile") */}
            <span className="product-page-material text-muted">
              <h6>
                <em>{material + " " + productType}</em>
              </h6>
            </span>
            <hr></hr>

            <PriceBlock product={product} />

            <div
              className={`d-flex justify-content-between ${
                variantsCollection.items.length
                  ? "flex-row-reverse"
                  : "flex-row"
              }`}
            >
              <div className="d-flex flex-column justify-content-end mb-3">
                <button
                  className="btn btn-secondary"
                  onClick={() => setModalShow(true)}
                >
                  view specs <AiFillTool />
                </button>
              </div>

              <InfoModal
                show={modalShow}
                onHide={setModalShow}
                product={product}
                pricePerBox={
                  soldByThe === "box"
                    ? price
                    : soldByThe === "pc"
                    ? price * piecesPerBox
                    : price * squareFootPerBox
                }
                pricePerPiece={
                  soldByThe === "pc"
                    ? price
                    : soldByThe === "box"
                    ? price / piecesPerBox
                    : price / squareFootPerPiece
                }
                pricePerSquareFoot={
                  soldByThe === "sf"
                    ? price
                    : soldByThe === "pc"
                    ? price * squareFootPerPiece
                    : price / squareFootPerBox
                }
              />

              {variantsCollection.items.length !== 0 ? (
                <VariantSelect
                  product={product}
                  name={name}
                  options={options}
                  selected={selected}
                  setSelected={setSelected}
                />
              ) : null}
            </div>

            <Calculator
              setQty={setQty}
              product={product}
              squareFootPerBox={squareFootPerBox}
              squareFootPerPiece={squareFootPerPiece}
            />

            <div className="mt-4 d-flex justify-content-between">
              <button className=" btn btn-secondary">order a sample</button>
              <div className=" d-flex border justify-content-between align-items-center p-0">
                <button
                  className="btn mr-0 ml-0"
                  onClick={() => setQty(qty - 1)}
                >
                  <AiOutlineMinus />
                </button>
                {qty}
                <button
                  className="btn ml-0 mr-0"
                  onClick={() => setQty(qty + 1)}
                >
                  <AiOutlinePlus />
                </button>
              </div>

              <button
                className="btn btn-secondary snipcart-add-item "
                data-item-id={router.query.id}
                data-item-image={product.productImage[0].url}
                data-item-name={product.name}
                data-item-description={`sold by the ${product.soldByThe}`}
                data-item-url="/"
                data-item-price={product.price}
                data-item-quantity={qty}
              >
                add to cart <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Product.getInitialProps = async (ctx) => {
  const {
    apolloClient,
    query: { id },
  } = ctx;

  const { data, loading, error } = await apolloClient.query({
    query: GET_PRODUCT,
    variables: {
      id,
    },
  });

  return {
    data,
    loading,
    error,
  };
};
