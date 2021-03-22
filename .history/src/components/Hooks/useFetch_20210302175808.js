import { useReducer } from "react";

const initialState = {
  jobs: [],
  loading: false,
  error: false,
};

const reducer = (state, action) => {
  return null;
};

export default function useFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    jobs: [],
    loading: false,
    error: false,
  };
}
