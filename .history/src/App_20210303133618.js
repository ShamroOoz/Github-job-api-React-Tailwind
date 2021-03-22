import { useFetch } from "./components/Hooks/useFetch";

function App() {
  const { jobs, loading, error } = useFetch();
  console.log(jobs);
  return (
    <div className="px-2">
      {loading && <div>Loading..</div>}
      {error && <div>Error..</div>}
      {jobs && <div>{jobs.length}</div>}
    </div>
  );
}

export default App;
