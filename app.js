const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
// Middleware
app.use(express.json());

// Tours Routs
app.use('/api/v1/tours', tourRouter);

// Users Routs
app.use('/api/v1/users', userRouter);

module.exports = app;
