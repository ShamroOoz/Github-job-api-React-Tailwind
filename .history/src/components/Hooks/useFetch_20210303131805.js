import { useReducer, useEffect } from "react";
import axios from "axios";
//
const initialState = {
  jobs: [],
  loading: true,
  error: false,
};
const ACTIONS = {
  MAKE_REQUEST : "make_request", 
  GET_DATA : "get_data" ,
  ERROR: "error"
 }

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      break;
    case ACTIONS.GET_DATA:
      break;
    case ACTIONS.ERROR:
      break;
    default:
      return state;
};
//https://secret-ocean-49799.herokuapp.com/
const BASE_URL =
  "https://secret-ocean-49799.herokuapp.com/https://jobs.github.com/positions.json";

export default function useFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
      dispatch({type : "make_request" , payload : ""})
    axios
      .get(BASE_URL)
      .then((res) => {
         dispatch({type : "get_data" , payload : res.data})
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({type : "error" , payload : err})
        console.log(err);
      }
  }, []);
  return state;
}