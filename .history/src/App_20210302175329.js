import { useFetchJobs } from "./components/Hooks/useFetch";

function App() {
  const { jobs, loading, error } = useFetchJobs();

  return (
    <div className="p-8 bg-blue-600 text-white">
      {loading && <div>Loading..</div>}
      {error && <div>Error..</div>}
      {jobs && <div>{jobs.length}</div>}
    </div>
  );
}

export default App;
