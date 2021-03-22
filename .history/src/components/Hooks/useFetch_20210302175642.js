import { useReducer } from "react";

export default function useFetch() {
  const initialState = {
    jobs: [],
    loading: false,
    error: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    jobs: [],
    loading: false,
    error: false,
  };
}
