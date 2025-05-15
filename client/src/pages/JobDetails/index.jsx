import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { getJobByID } from "../../service/job.service";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    getJobByID(id).then((res) => {
        setLoading(false);
      if (res.success) {
        setJob(res.data);
      }
    });
  }, [id]);

  if (!job)
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="text-blue-600 hover:underline text-sm mb-4 inline-block"
        >
          ← Back to Listings
        </Link>

        {loading ? (
          <Spinner />
        ) : (
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
            <p className="text-gray-700 text-lg mb-1">{job.company}</p>
            <p className="text-sm text-gray-500 mb-4">
              {job.location} • {job.type}
            </p>
            <p className="text-gray-800 whitespace-pre-wrap">
              {job.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
