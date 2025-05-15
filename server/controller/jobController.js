const { validationResult } = require("express-validator");
const Job = require("../model/Job");
const { TryCatch } = require("../utils");

// @desc    Get Job
// @route   GET /api/job
// @access  Public
exports.getAllJobs = TryCatch(async (req, res) => {
  const { search } = req.query;

  let filter = {};
  if (search) {
    filter = {
      $or: [
        { title: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ],
    };
  }

  const jobs = await Job.find(filter).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    data: jobs,
  });
});

// @desc    Get Job By ID
// @route   GET /api/job/:id
// @access  Public
exports.getJobById = TryCatch(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.status(200).json({
    success: true,
    data: job,
  });
});

// @desc    Create Job
// @route   POST /api/job
// @access  Public
exports.createJob = TryCatch(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { title, company, type, location, description } = req.body;

  const job = new Job({ title, company, type, location, description });
  await job.save();
  res.status(201).json({
    success: true,
    data: job,
  });
});
