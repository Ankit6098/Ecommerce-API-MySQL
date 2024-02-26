const express = require('express');
const routes = express.Router();

const reviewController = require('../controllers/reviewController');

routes.get('/', reviewController.getAllReviews);
routes.post('/create', reviewController.createReview);
routes.get('/user-review/:user_id', reviewController.getReviewByUserId);
routes.patch('/update', reviewController.updateReview);
routes.delete('/delete/:user_id', reviewController.deleteReview);
routes.get('/product-review/:product_id', reviewController.getReviewByProductId);

module.exports = routes;
