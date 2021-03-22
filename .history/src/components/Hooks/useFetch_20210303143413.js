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

export const useFetch = (params, page) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // https://jobs.github.com/positions/21516.json?markdown=true
  //useeffect hook to get data
  useEffect(() => {
    const cancelToken = CancelToken.source();
    dispatch({ type: "make_request", payload: "" });
    axios
      .get(BASE_URL, {
        params: {
          markdown: true,
          page: page,
          ...params,
        },
      })
      .then((res) => {
        dispatch({ type: "get_data", payload: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        dispatch({ type: "error", payload: err });
      });
    //clean up
    return () => {
      cancelToken.cancel();
    };
  }, [page, params]);

  return state;
};
