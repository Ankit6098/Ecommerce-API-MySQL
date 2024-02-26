const express = require('express');
const routes = express.Router();

const productController = require('../controllers/productController');

routes.get('/', productController.getAllProducts);
routes.post('/create', productController.createProduct);
routes.get('/:id', productController.getProductById);
routes.put('/update', productController.updateProduct);
routes.delete('/delete', productController.deleteProduct);

module.exports = routes;