import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/job-board', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export const TryCatch = (passedFunction) => async (req, res, next) => {
  try {
    await passedFunction(req, res, next);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
    next(error);
  }
};
