const express = require("express");
const router = express.Router();
const jobController = require("../controller/jobController");
const { body } = require("express-validator");
const { jobValidator } = require("../lib/validator");

// Get Job
router.get("/", jobController.getAllJobs);

// GET Job by ID
router.get("/:id", jobController.getJobById);

// Create Job
router.post("/", jobValidator, jobController.createJob);

module.exports = router;
