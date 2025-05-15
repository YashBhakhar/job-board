import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJobs } from "../../service/job.service";
import Spinner from "../../components/Spinner";
import { getTimeDifference } from "../../utils";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // delay 500ms

    return () => clearTimeout(handler); // cleanup
  }, [search]);

  // Fetch when debouncedSearch updates
  useEffect(() => {
    fetchJobs();
  }, [debouncedSearch]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const params = { search: debouncedSearch };
      const res = await getJobs(params);
      setLoading(false);
      if (res.success) {
        setJobs(res.data);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title & Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Job Board</h1>
          <Link
            to="/add-job"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Post a Job
          </Link>
        </div>

        {/* Search */}
        <form className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search jobs"
            value={search}
            onChange={handleSearch}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </form>

        {/* Job Cards */}
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="bg-white border rounded p-4 shadow hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-xs text-gray-500 mb-1">
                  Posted{" "}
                  {getTimeDifference(job.createdAt)}
                </p>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500">
                  {job.location} • {job.type}
                </p>
                <Link
                  to={`/job/${job._id}`}
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
