import Link from "next/link";
import Image from "next/image";
import { showSFPricing } from "../helper.ts";
const ProductCard = ({ product }) => {
  return (
    <div>
      <Link href={`/shop/product/${product.sys.id}`}>
        <div className="grid-item">
          <Image
            src={product.productImage[0].public_id}
            alt={product.name}
            layout="responsive"
            width={200}
            height={200}
          />
          <div
            className="mt-1"
            style={{ fontSize: "0.9rem", lineHeight: "1em" }}
          >
            {product.name}
          </div>
          <div className="text-muted" style={{ fontSize: "0.8rem" }}>
            ${showSFPricing(product)} / sf
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
