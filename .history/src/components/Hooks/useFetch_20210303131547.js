import { useReducer, useEffect } from "react";
import axios from "axios";
//
const initialState = {
  jobs: [1, 2, 3],
  loading: false,
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
    axios
      .get(BASE_URL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return state;
}
