import { Product } from "./types/Product";

export const round = (val: number) => Math.round(100 * val) / 100;

export const showSFPricing = (product: Product) => {
  let ans;
  if (product.soldByThe === "sf") {
    ans = product.price;
  } else if (product.soldByThe === "pc") {
    ans = product.price * product.squareFootPerPiece;
  } else {
    ans = product.price / product.squareFootPerBox;
  }
  return round(ans);
};

export const checkIfValsThere = (val: any) => {
  if (val == "NaN" || val == "Infinity") {
    return "N/A";
  } else if (val !== null) {
    return val;
  } else if (val == null) {
    return "N/A";
  }
};

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
