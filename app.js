const express = require('express');
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Routes
const foodRouter = require('./routes/foods');
app.use('/foods', foodRouter);

// Start server
const PORT = process.env.PORT || 3200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Connect to MongoDB
require('./db');
