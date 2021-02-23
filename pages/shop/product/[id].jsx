import React, { useEffect, useState, useContext } from "react";
import styles from "./product-page.module.scss";
import { GET_PRODUCT } from "../../../apollo/queries/product";
import HandleImage from "../../../components/product/ImageSlider.component.jsx";
import { Calculator } from "../../../components/product/Calculator.component.tsx";
import { InfoModal } from "../../../components/product/InfoModal.component.tsx";
import { FrostProofModal } from "../../../components/product/FrostProofModal.component.tsx";
import { OrderSampleModal } from "../../../components/product/OrderSampleModal.component.tsx";
import { AiFillTool } from "react-icons/ai";
import { FaShoppingCart, FaSnowflake } from "react-icons/fa";
import { client } from "../../../contentful.client";
import { useRouter } from "next/router";
import VariantSelect from "../../../components/product/VariantSelect.component";
import { FilterContext } from "../../../context/filterbar.context";
import PriceBlock from "../../../components/product/PriceBlock.component";
import { NextSeo } from "next-seo";

export default function Product({ data: { product }, loading }) {
  const router = useRouter();
  const [selected, setSelected] = useState(router.query.id);
  const [qty, setQty] = useState(1);
  const [options, setOptions] = useState([]);
  const [infoModalShow, setInfoModalShow] = useState(false);
  const [frostProofModalShow, setFrostProofModalShow] = useState(false);
  const [sampleModal, setSampleModal] = useState(false);
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
      <NextSeo
        title={name}
        openGraph={{
          url: `https://flamboyant-mcclintock-010ddc.netlify.app/shop/product/${router.query.id}`,
          title: name,
          locale: "en_US",
          images: [
            {
              url: productImage[0].url,
              width: 650,
              height: 650,
              alt: "product-image",
            },
          ],
        }}
      />
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
              <h2 className={styles.productpagename}>{name}</h2>
              {/* Frost Proof */}
              <span>
                {frostProof ? (
                  <button
                    className="btn d-flex frost-proof-icon"
                    onClick={() => setFrostProofModalShow(true)}
                  >
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
                  onClick={() => setInfoModalShow(true)}
                >
                  view specs <AiFillTool />
                </button>
              </div>
              <FrostProofModal
                show={frostProofModalShow}
                onHide={setFrostProofModalShow}
              />
              <OrderSampleModal show={sampleModal} onHide={setSampleModal} />
              <InfoModal
                show={infoModalShow}
                onHide={setInfoModalShow}
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
              <button
                className=" btn btn-secondary"
                onClick={() => setSampleModal(true)}
              >
                order a sample
              </button>
              <div className="d-flex justify-content-center align-items-center p-0">
                <input
                  className="w-50 form-control"
                  onChange={(e) => setQty(e.target.value)}
                  type="number"
                  value={qty}
                  placeholder={`1 ${soldByThe}`}
                  min="1"
                />
              </div>
              <button
                className="btn btn-secondary snipcart-add-item "
                data-item-id={router.query.id}
                data-item-image={product.productImage[0].url}
                data-item-name={product.name}
                data-item-description={`sold by the ${product.soldByThe}`}
                data-item-url="/"
                data-item-price={product.price}
                data-item-quantity={qty ? qty : 1}
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
