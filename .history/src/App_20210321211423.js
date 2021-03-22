import { Fragment, useState } from "react";
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
    <div className="dark:text-white">
      <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          for="toggle"
          class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <label for="toggle" class="text-xs text-gray-700">
        Toggle me.
      </label>
      <NavBar />
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
