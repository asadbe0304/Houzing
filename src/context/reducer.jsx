export const reducers = (state, action) => {
  switch (action.type) {
    case "MENU":
      return {
        ...state,
        menu: action.payload,
      };
  
    default:
      return state;
  }
};