const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { connectDB } = require('./utils');
const jobRoutes = require('./routes/jobRoutes')

const app = express();
app.use(cors());
app.use(express.json());

connectDB()

app.use('/api/jobs', jobRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));