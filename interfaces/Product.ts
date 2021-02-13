import { ProductImage } from "./ProductImage";
export type Product = {
  sys: {
    id: string;
  };
  name: string;
  productType: string;
  material: string;
  description: string;
  vendor: string;
  color: string;
  finish: string;
  length: string;
  width: string;
  thickness: string;
  soldByThe: string;
  weight: number;
  price: number;
  piecesPerBox: number;
  squareFootPerBox: number;
  squareFootPerPiece: number;
  tags: string[];
  frostProof: boolean;
  colorVariation: string;
  application: string;
  sku: string;
  // ADD THE FOLLOWING CUSTOM TYPES
  productImage: ProductImage[];
  // variantsCollection
};
