const express = require('express');
const routes = express.Router();

const cartController = require('../controllers/cartController');

routes.get('/', cartController.getAllCarts);
routes.post('/create/:product-id/:user-id/:quantity', cartController.createCart);
routes.get('/user/:user_id', cartController.getCartByUserId);
routes.put('/update/:product-id/:user-id/:quantity', cartController.updateCart);
routes.delete('/delete/:user-id', cartController.deleteCart);

module.exports = routes;