import { useFetch } from "./components/Hooks/useFetch";
import { useState } from "react";

function App() {
  const [param, setparam] = useState({});
  const [page, setpage] = useState(2);
  const { jobs, loading, error } = useFetch(param, page);
  return (
    <div className="px-2 bg-indigo-300">
      {loading && <div>Loading..</div>}
      {error && (
        <div className="text-lg text-red-500">Error..Try refreshing</div>
      )}
      <div>
        {jobs && jobs.map((job) => <div key={job.id}>{job.title}</div>)}
      </div>
    </div>
  );
}

export default App;
