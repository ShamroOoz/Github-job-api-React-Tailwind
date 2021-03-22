import { useReducer, useEffect } from "react";
import axios from "axios";
import { reducer, ACTIONS } from "../Reducer/Reduce";

//
const { MAKE_REQUEST, GET_DATA, ERROR, UPDATE_HAS_NEXT_PAGE } = ACTIONS;
const BASE_URL =
  "https://secret-ocean-49799.herokuapp.com/https://jobs.github.com/positions.json";

const initialState = {
  jobs: [],
  loading: false,
  error: false,
  hasNextPage: false,
};

export const useFetch = (params, page) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //useeffect hook to get data

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: MAKE_REQUEST, payload: "" });
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken1.token,
        params: {
          markdown: true,
          page: page,
          ...params,
        },
      })
      .then((res) => {
        dispatch({ type: GET_DATA, payload: res.data });
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        dispatch({ type: ERROR, payload: err });
      });
    //check Has next pAge

    const cancelToken2 = axios.CancelToken.source();
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken2.token,
        params: { markdown: true, page: page + 1, ...params },
      })
      .then((res) => {
        dispatch({
          type: UPDATE_HAS_NEXT_PAGE,
          payload: { hasNextPage: res.data.length !== 0 },
        });
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        dispatch({ type: ERROR, payload: err });
      });

    return () => {
      cancelToken1.cancel();
      cancelToken2.cancel();
    };
  }, [page, params]);

  return state;
};
