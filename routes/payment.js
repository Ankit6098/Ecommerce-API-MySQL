const express = require('express');
const routes = express.Router();

const paymentController = require('../controllers/paymentController');

routes.get('/', paymentController.getAllPayments);
routes.post('/create', paymentController.createPayment);
routes.get('/user-payment/:id', paymentController.getPaymentByUserId);
routes.patch('/update', paymentController.updatePayment);
routes.delete('/payment/:id', paymentController.deletePayment);

module.exports = routes;