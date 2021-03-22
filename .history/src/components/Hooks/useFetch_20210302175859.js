import { useReducer, useEffect } from "react";

const initialState = {
  jobs: [],
  loading: false,
  error: false,
};

const reducer = (state, action) => {
  return null;
};

const BASE_URL = "https://jobs.github.com/positions.json";

export default function useFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {}, [input]);
  return {
    jobs: [],
    loading: false,
    error: false,
  };
}
