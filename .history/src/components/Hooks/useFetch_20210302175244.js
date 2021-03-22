import React from "react";

export default function useFetchJobs() {
  return {
    jobs: [1, 2, 5],
    loading: false,
    error: false,
  };
}
