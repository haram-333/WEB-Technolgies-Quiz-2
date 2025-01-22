const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const cors = require('cors');


// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Enable all CORS requests
app.use(cors());


// Middleware to parse JSON
app.use(express.json());

// Use student routes
app.use('/api/students', require('./routes/studentRoutes'));


// Basic route to check if the API is running
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});