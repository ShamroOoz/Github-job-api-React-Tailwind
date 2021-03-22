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
//https://secret-ocean-49799.herokuapp.com/
const BASE_URL =
  "https://secret-ocean-49799.herokuapp.com/https://jobs.github.com/positions.json";

export default function useFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return state;
}
