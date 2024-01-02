export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        data: action.payload,
      };
    case "DELETE":
      return {
        ...state,
        data: state.data.filter((user) => user.id !== action.payload),
      };
    case "ERROR":
      return {
        ...state,
        isError: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
