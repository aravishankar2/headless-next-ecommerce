import React, { useEffect, useState } from "react";
import { GET_PRODUCT } from "../../apollo/queries/product";
import HandleImage from "../../components/ImageSlider.component";
import { Calculator } from "../../components/Calculator.component";
import { InfoModal } from "../../components/InfoModal.component";
import { AiFillTool, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaShoppingCart, FaSnowflake } from "react-icons/fa";
import { client } from "../../contentful.client";
import { useRouter } from "next/router";
import VariantSelect from "../../components/VariantSelect.component";
import { showSFPricing, numberWithCommas } from "../../helper";
export default function Product({ data: { product }, loading, error }) {
  const router = useRouter();
  const [selected, setSelected] = useState(router.query.id);
  const [qty, setQty] = useState(1);
  const [options, setOptions] = useState([]);
  const [modalShow, setModalShow] = useState(false);

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

  let {
    description,
    productImage,
    name,
    frostProof,
    soldByThe,
    material,
    productType,
    price,
    squareFootPerPiece,
    length,
    width,
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
            {/* Image Component Goes Here */}
            <div className="mb-4 pt-2">
              <em style={{ lineHeight: "1.2em" }}>"{description}"</em>
            </div>
          </div>

          {/* The rest of the product info goes here. */}
          <div className="col-md">
            {/* Product Name */}
            <div className="d-flex justify-content-between align-items-start">
              <h2 style={{ fontSize: "1.8em" }}>{name}</h2>
              {/* Frost Proof */}
              <span>
                {frostProof ? (
                  <button className="btn d-flex" style={{ color: "lightblue" }}>
                    <FaSnowflake />
                  </button>
                ) : null}
              </span>
            </div>

            {/* Product Type (eg. "Hand Painted Terracto Tile") */}
            <span>
              <h6>
                <em>{material + " " + productType}</em>
              </h6>
            </span>
            <hr></hr>

            {/* Price Block */}
            <div className="mb-3">
              <div className="d-flex flex-column">
                {soldByThe === "box" || soldByThe === "pc" ? (
                  <div className="d-flex">
                    <span className="font-weight-bold">
                      $ {showSFPricing(product)}
                    </span>
                    <p className="pl-2 mb-0 text-muted font-italic">/ sf</p>
                  </div>
                ) : null}
                <div className="d-flex">
                  <div className="d-flex">
                    <span className="font-weight-bold">
                      $ {numberWithCommas(price)}
                    </span>
                    <p className="pl-2 mb-0 text-muted font-italic">
                      / {soldByThe}
                    </p>
                  </div>

                  <div className="d-flex pl-2">
                    {soldByThe === "sf" || soldByThe === "pc" ? (
                      <span className="d-flex">
                        ({squareFootPerPiece}
                        <p className="pl-2 mb-0 text-muted font-italic">
                          sf / pc
                        </p>
                        )
                      </span>
                    ) : (
                      <span className="d-flex">
                        ({squareFootPerBox}
                        <p className="pl-2 mb-0 text-muted font-italic">
                          sf / box
                        </p>
                        )
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

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
                onHide={() => setModalShow(false)}
                product={product}
                length={length}
                width={width}
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
                squareFootPerBox={squareFootPerBox}
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
              product={product}
              squareFootPerBox={squareFootPerBox}
              squareFootPerPiece={squareFootPerPiece}
            />

            <div className="mt-4 d-flex justify-content-between">
              <button className="btn btn-info">order a sample</button>
              <button
                className="btn btn-success ml-4 snipcart-add-item"
                data-item-id={router.query.id}
                data-item-image={product.productImage[0].url}
                data-item-name={product.name + ' ' + `(by the ${product.soldByThe})`}
                data-item-url={`http://localhost:3000/shop/${router.query.id}`}
                data-item-price={product.price}
                data-item-custom1-soldbythe={product.soldByThe}
              >
                add to cart <FaShoppingCart />
              </button>
            </div>

            <div className="w-100 d-flex justify-content-center">
              <div className="col-4 mt-4 d-flex border justify-content-between align-items-center p-0">
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
