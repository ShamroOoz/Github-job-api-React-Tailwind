import { useReducer, useEffect } from "react";
import axios from "axios";
import { reducer, ACTIONS } from "../Reducer/Reduce";

//
const { MAKE_REQUEST, GET_DATA, ERROR } = ACTIONS;
const BASE_URL = "jsonplaceholder.com/user";
//"https://secret-ocean-49799.herokuapp.com/https://jobs.github.com/positions.json";

const initialState = {
  jobs: [],
  loading: false,
  error: false,
};

export const useFetch = (params, page) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //useeffect hook to get data

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: MAKE_REQUEST, payload: "" });
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken.token,
        params: {
          markdown: true,
          page: page,
          ...params,
        },
      })
      .then((res) => {
        dispatch({ type: GET_DATA, payload: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        dispatch({ type: ERROR, payload: err });
      });
    //clean up
    return () => {
      cancelToken.cancel();
    };
  }, [page, params]);

  return state;
};
