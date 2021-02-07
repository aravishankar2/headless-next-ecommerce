export function params(state, action) {
  switch (action.type) {
    case "SOLD_PER":
      return { ...state, soldByThe: action.payload };
    case "MATERIAL":
      return { ...state, material: action.payload };
    case "LIMIT":
      return { ...state, limit: action.payload };
    case "FROST_PROOF":
      return { ...state, frostProof: action.payload };
    case "FINISH":
      return { ...state, finish: action.payload };
    case "LOAD_MORE":
      return { ...state, limit: action.payload };
    case "ORDER":
      return { ...state, order: action.payload };
    default:
      return state;
  }
}
