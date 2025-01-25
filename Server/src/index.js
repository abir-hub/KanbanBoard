const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./auth');

//load env variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware to parse incoming requests with JSON payloads
app.use(express.json());

//Use auth routes for handling login and signup
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});