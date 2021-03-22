import { useReducer, useEffect } from "react";
import axios, { CancelToken } from "axios";
import { reducer } from "./Reduce";

const BASE_URL =
  "https://secret-ocean-49799.herokuapp.com/https://jobs.github.com/positions.json";

const initialState = {
  jobs: [],
  loading: false,
  error: false,
};

export const useFetch = (page, params) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // https://jobs.github.com/positions/21516.json?markdown=true
  //useeffect hook to get data
  useEffect(() => {
    const cancel = CancelToken.source();
    dispatch({ type: "make_request", payload: "" });
    axios
      .get(BASE_URL, {
        markdown: true,
        page: page,
        ...params,
      })
      .then((res) => {
        dispatch({ type: "get_data", payload: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "error", payload: err });
      });
  }, [page, params]);

  return state;
};
