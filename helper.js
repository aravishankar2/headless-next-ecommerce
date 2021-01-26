export const round = (val) => Math.round(100 * val) / 100;
export const showSFPricing = (product) => {
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

export const checkIfValsThere = (val) => {
  if (val == "NaN" || val == "Infinity") {
    return "N/A";
  } else if (val !== null) {
    return val;
  } else if (val == null) {
    return "N/A";
  }
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
