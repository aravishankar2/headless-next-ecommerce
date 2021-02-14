import Link from "next/link";
import Image from "next/image";
import { showSFPricing } from "../../helper";
import { Product } from "../../interfaces/Product";

export type ProductProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
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
          <div className="mt-1 grid-item-name">{product.name}</div>
          <div className="text-muted grid-item-price">
            ${showSFPricing(product)} / sf
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
