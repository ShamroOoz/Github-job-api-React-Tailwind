import { useReducer, useEffect } from "react";
import axios from "axios";
//
const initialState = {
  jobs: [],
  loading: false,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Hiiii":
      break;
    case "Heloo":
      break;
    case "Bye bye":
      break;

    default:
      break;
  }
  return null;
};
//https://cors-anywhere.herokuapp.com
const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/postions.json";

export default function useFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => 
        console.log(res))
      .catch((err) => 
        console.log(err);
      );
  }, []);
  return {
    jobs: [],
    loading: false,
    error: false,
  };
}
