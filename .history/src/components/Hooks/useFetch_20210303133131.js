import { useReducer, useEffect } from "react";
import axios from "axios";
import { reducer } from "./Reduce";

const BASE_URL =
  "https://secret-ocean-49799.herokuapp.com/https://jobs.github.com/positions.json";

const initialState = {
  jobs: [],
  loading: false,
  error: false,
};

const ACTIONS = {
  MAKE_REQUEST: "make_request",
  GET_DATA: "get_data",
  ERROR: "error",
};

export const useFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //useeffect hook to get data
  useEffect(() => {
    dispatch({ type: "make_request", payload: "" });
    axios
      .get(BASE_URL)
      .then((res) => {
        dispatch({ type: "get_data", payload: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "error", payload: err });
      });
  });

  return state;
};
