import { useState } from "react";
import { useFetch } from "./components/Hooks/useFetch";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import Pagination from "./components/Pagination";
import Job from "./components/Reducer/Job";
import Spinner from "./components/Spinner";
import Alert from "./components/Alert";

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
      <SearchForm handleparamchange={handleparamchange} params={params} />
      <div className="px-2">
        {loading && <Spinner />}
        {error && <Alert />}
        <div>
          {jobs &&
            jobs.map((job) => (
              <li className="leading-7 text-xl" key={job.id}>
                {job.title}
              </li>
            ))}
        </div>
      </div>
      {/* <Job /> */}

      <Pagination />
    </>
  );
}

export default App;
