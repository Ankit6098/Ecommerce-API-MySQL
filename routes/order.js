const express = require('express');
const routes = express.Router();

const orderController = require('../controllers/orderController');

routes.get('/', orderController.getAllOrders);
routes.post('/create/:user-id/:product-id', orderController.createOrder);
routes.get('get-order/:id', orderController.getOrderByUserId);
routes.put('/update', orderController.updateOrder);
routes.delete('/delete', orderController.deleteOrder);
routes.get('/user/:userId', orderController.getOrderByUserId);

module.exports = routes;