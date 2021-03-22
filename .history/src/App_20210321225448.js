import { useState } from "react";
import { useFetch } from "./components/Hooks/useFetch";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import Pagination from "./components/Pagination";
import Job from "./components/Reducer/Job";
import Spinner from "./components/Spinner";
import Alert from "./components/Alert";
import Toggle from "./components/Toggle";

function App() {
  const [params, setparam] = useState({});
  const [page, setpage] = useState(1);
  const [toggle, settoggle] = useState(0);
  const { jobs, loading, error } = useFetch(params, page);
  let dark = toggle === 1 ? " dark:text-white dark:bg-gray-800";
  const handleparamchange = (e) => {
    setpage(1);
    let param = e.target.name;
    let value = e.target.value;
    setparam((prevparams) => {
      return { ...prevparams, [param]: value };
    });
  };

  return (
    <div className={dark}>
      <NavBar />
      <Toggle toggle={toggle} settoggle={settoggle} />
      <SearchForm handleparamchange={handleparamchange} params={params} />
      <div className="px-2">
        {loading && <Spinner />}
        {error && <Alert reason={error} />}
        {[...jobs].length === 0 && <Alert reason={false} />}
        {jobs &&
          jobs.map((result) => {
            return <Job key={result.id} result={result} />;
          })}
      </div>
      <Pagination />
    </div>
  );
}

export default App;
