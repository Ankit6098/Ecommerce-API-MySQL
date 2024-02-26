const express = require('express');
const routes = express.Router();

const productController = require('../controllers/productController');

routes.get('/', productController.getAllProducts);
routes.post('/create', productController.createProduct);
routes.get('/:id', productController.getProductById);
routes.put('/update/:name/:description/:id', productController.updateProduct);
routes.delete('/delete/:id', productController.deleteProduct);
routes.put('/update-price/:id/:price', productController.updateProductPrice);
routes.get('/get-product/:name', productController.getProductByName);

module.exports = routes;