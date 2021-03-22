import { useFetch } from "./components/Hooks/useFetch";

function App() {
  const { jobs, loading, error } = useFetch();
  return (
    <div className="px-2 bg-indigo-300">
      {loading && <div>Loading..</div>}
      {error && <div>Error..</div>}
      {jobs && jobs.map((job) => <dviv key={job.id}>{job.title}</dviv>)}
    </div>
  );
}

export default App;
