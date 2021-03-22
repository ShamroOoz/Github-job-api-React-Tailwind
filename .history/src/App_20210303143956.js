import { useFetch } from "./components/Hooks/useFetch";
import { useState } from "react";

function App() {
  const [params, setparam] = useState({});
  const [page, setpage] = useState(1);
  const { jobs, loading, error } = useFetch(params, page);
  return (
    <>
      <div className="coantainer text-center pt-2 text-3xl ">
        <h3>Github Jobs Api</h3>
      </div>
      <div className="px-2 bg-indigo-300">
        {loading && <div>Loading..</div>}
        {error && (
          <div className="text-lg text-red-500">Error..Try refreshing</div>
        )}
        <div>
          {jobs && jobs.map((job) => <div key={job.id}>{job.title}</div>)}
        </div>
      </div>
    </>
  );
}

export default App;
