// index.js (main file)
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
