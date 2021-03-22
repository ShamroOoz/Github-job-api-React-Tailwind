import { useReducer, useEffect } from "react";
import axios from "axios";
const initialState = {
  jobs: [],
  loading: false,
  error: false,
};

const reducer = (state, action) => {
    case "heloo" :
return null,
        case "hiii ":
            return null
  return null;
};

const BASE_URL = "https://jobs.github.com/positions.json";

export default function useFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => {})
      .catch((err) => {});
  }, []);
  return {
    jobs: [],
    loading: false,
    error: false,
  };
}
