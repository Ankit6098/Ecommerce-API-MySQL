const express = require('express');
const routes = express.Router();

routes.use('/user', require('./user'));
routes.use('/category', require('./category'));
routes.use('/product', require('./product'));
routes.use('/order', require('./order'));
routes.use('/payment', require('./payment'));
routes.use('review', require('./review'));

module.exports = routes;