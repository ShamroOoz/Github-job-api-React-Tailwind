import React from "react";

export default function useFetch() {
  return {
    jobs: [],
    loading: false,
    error: false,
  };
}
