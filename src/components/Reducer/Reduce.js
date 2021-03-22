export const ACTIONS = {
  MAKE_REQUEST: "MAKE_REQUEST",
  GET_DATA: "GET_DATA",
  ERROR: "ERROR",
  UPDATE_HAS_NEXT_PAGE: "update-has-next-page",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
      };
    case ACTIONS.ERROR:
      return { ...state, error: true };
    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage };
    default:
      return state;
  }
};
