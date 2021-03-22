import { useState } from "react";
import { useFetch } from "./components/Hooks/useFetch";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";

function App() {
  const [params, setparam] = useState({});
  const [page, setpage] = useState(1);
  const { jobs, loading, error } = useFetch(params, page);

  const handleparamchange = (e) => {
    setpage(1);
    let param = e.target.name;
    let value = e.target.value;
    setparam((prevparams) => {
      return { ...prevparams, [param]: value };
    });
  };

  return (
    <>
      <NavBar />

      <div>
        <SearchForm handleparamchange={handleparamchange} params={params} />
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
