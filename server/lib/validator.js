import { body } from "express-validator";

export const jobValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("company").notEmpty().withMessage("Company is required"),
  body("type").isIn(["Full-time", "Part-time"]).withMessage("Invalid job type"),
  body("location").notEmpty().withMessage("Location is required"),
  body("description").notEmpty().withMessage("Description is required"),
];
