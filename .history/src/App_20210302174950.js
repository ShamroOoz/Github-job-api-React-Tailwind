import { useFetch } from "useFetch";

function App() {
  const { jobs, loading, error } = useFetch();

  return <div className="p-8 bg-blue-600 text-white"></div>;
}

export default App;
