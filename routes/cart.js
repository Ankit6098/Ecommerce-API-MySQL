const express = require('express');
const routes = express.Router();

const cartController = require('../controllers/cartController');

routes.get('/', cartController.getAllCarts);
routes.post('/create', cartController.createCart);
routes.get('/user/:user_id', cartController.getCartByUserId);
routes.put('/update', cartController.updateCart);
routes.delete('/delete', cartController.deleteCart);

module.exports = routes;