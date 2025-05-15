import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addJob } from "../../service/job.service";

const jobSchema = z.object({
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  type: z.enum(["Full-time", "Part-time"]),
  location: z.string().min(1, "Location is required"),
  description: z.string().min(1, "Description is required"),
});

export default function AddJob() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(jobSchema),
  });

  const onSubmit = async (data) => {
    await addJob(data).then(res => {
        if (res.success) {
            navigate("/");
        }
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title")}
          placeholder="Job Title"
          className="w-full p-2  border border-gray-300 rounded"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

        <input
          {...register("company")}
          placeholder="Company"
          className="w-full p-2 mt-5 border border-gray-300 rounded"
        />
        {errors.company && (
          <p className="text-red-500 text-sm">{errors.company.message}</p>
        )}

        <select
          {...register("type")}
          className="w-full p-2 mt-5 border border-gray-300 rounded"
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
        {errors.type && (
          <p className="text-red-500 text-sm">{errors.type.message}</p>
        )}

        <input
          {...register("location")}
          placeholder="Location"
          className="w-full p-2 mt-5 border border-gray-300 rounded"
        />
        {errors.location && (
          <p className="text-red-500 text-sm">{errors.location.message}</p>
        )}

        <textarea
          {...register("description")}
          placeholder="Job Description"
          className="w-full p-2 mt-5 border border-gray-300 rounded h-24"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}

        <button
          type="submit"
          className="w-full mt-5 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
