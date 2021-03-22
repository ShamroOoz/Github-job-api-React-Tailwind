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

const BASE_URL = "https://jobs.github.com";

export default function useFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(BASE_URL, {
        params: "/postions.json",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return {
    jobs: [],
    loading: false,
    error: false,
  };
}
