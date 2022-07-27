const express = require('express');
const tourRouter = express.Router();

// Importing Handler Functions
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  checkOutId,
  checkBody,
} = require('./../controllers/tourControllers');

tourRouter.param('id', checkOutId);
// Routes
tourRouter.route('/').get(getAllTours).post(checkBody, createTour);
tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = tourRouter;
