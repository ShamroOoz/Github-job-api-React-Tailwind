import { useFetch } from "./components/Hooks/useFetch";
import { useState } from "react";
import SearchForm from "./components/Hooks/SearchForm";

function App() {
  const [params, setparam] = useState({});
  const [page, setpage] = useState(1);
  const { jobs, loading, error } = useFetch(params, page);
  const handleparamchange = (e) => {
    e.target.name;
    e.target.value;
  };
  return (
    <>
      <div className="coantainer text-center font-bold pt-2 text-3xl ">
        <h3>Github Jobs Api</h3>
      </div>
      <div>
        <SearchForm />
      </div>
      <div className="px-2 bg-indigo-300">
        {loading && <div className="text-3xl font-bold">Loading..</div>}
        {error && (
          <div className="text-lg text-red-500">Error..Try refreshing</div>
        )}
        <div>
          {jobs &&
            jobs.map((job) => (
              <li className="leading-7 text-xl" key={job.id}>
                {job.title}
              </li>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
