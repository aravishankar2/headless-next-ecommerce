import { showSFPricing, numberWithCommas } from "../../helper";
import { Product } from "../../interfaces/Product";

interface Props {
  product: Product;
}

const PriceBlock = ({ product }: Props) => {
  return (
    <div className="mb-3">
      <div className="d-flex flex-column">
        {product.soldByThe === "box" || product.soldByThe === "pc" ? (
          <div className="d-flex">
            <span className="font-weight-bold">$ {showSFPricing(product)}</span>
            <p className="pl-2 mb-0 text-muted font-italic">/ sf</p>
          </div>
        ) : null}
        <div className="d-flex">
          <div className="d-flex">
            <span className="font-weight-bold">
              $ {numberWithCommas(product.price)}
            </span>
            <p className="pl-2 mb-0 text-muted font-italic">
              / {product.soldByThe}
            </p>
          </div>

          <div className="d-flex pl-2">
            {product.soldByThe === "sf" || product.soldByThe === "pc" ? (
              <span className="d-flex">
                ({product.squareFootPerPiece}
                <p className="pl-2 mb-0 text-muted font-italic">sf / pc</p>)
              </span>
            ) : (
              <span className="d-flex">
                ({product.squareFootPerBox}
                <p className="pl-2 mb-0 text-muted font-italic">sf / box</p>)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
