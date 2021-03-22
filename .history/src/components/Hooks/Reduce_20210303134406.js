const ACTIONS = {
  MAKE_REQUEST: "make_request",
  GET_DATA: "get_data",
  ERROR: "error",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { ...state, loading: true, jobs: [] };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        jobs: [...state.jobs, action.payload],
      };
    case ACTIONS.ERROR:
      return { ...state, error: true, jobs: [], loading: false };
    default:
      return state;
  }
};
