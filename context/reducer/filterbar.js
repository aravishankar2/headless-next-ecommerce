export function filterbar(state, action) {
    switch (action.type) {
      case "TOGGLE_OPEN":
        return { ...state, opened: action.payload };
      default:
        return state;
    }
  }