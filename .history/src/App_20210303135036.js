import { useFetch } from "./components/Hooks/useFetch";

function App() {
  const { jobs, loading, error } = useFetch();
  return (
    <div className="px-2 bg-indigo-300">
      {loading && <div>Loading..</div>}
      {error && <div>Error..</div>}
      <div>
        {jobs && jobs.map((job) => <div key={job.id}>{job.title}</div>)}
      </div>
    </div>
  );
}

export default App;
