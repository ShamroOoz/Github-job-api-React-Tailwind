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
        <div>{jobs && jobs.map((result) => <Job reult={result} />)}</div>
      </div>
      <Pagination />
    </>
  );
}

export default App;
