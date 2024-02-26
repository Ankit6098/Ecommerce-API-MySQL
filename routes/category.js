const express = require('express');
const routes = express.Router();

const categoryController = require('../controllers/categoryController');

routes.get('/', categoryController.getAllCategories);
routes.post('/create', categoryController.createCategory);
routes.get('/:name', categoryController.getCategoryByName);
routes.put('/update', categoryController.updateCategory);
routes.delete('/delete', categoryController.deleteCategory);
routes.get('/id/:id', categoryController.getCategoryById);

module.exports = routes;