const db = require('../config/db');
const query = require('../queries/product');

// get all products
module.exports.getAllProducts = (req, res) => {
    query.getAllProducts((err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            if (result.length === 0) {
                res.status(404).json({ message: 'There is no product' });
            } else {
                res.status(200).json(result);
            }
        }
    });
};

// create product
module.exports.createProduct = (req, res) => {
    const { name, description, price, category } = req.body;
    query.createProduct(name, description, price, category, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(201).json({ message: 'Product created successfully', result });
        }
    });
};

// get product by name
module.exports.getProductByName = (req, res) => {
    const { name } = req.params;
    query.getProductByName(name, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json(result);
        }
    });
};

// get product by id
module.exports.getProductById = (req, res) => {
    const { id } = req.params;
    query.getProductById(id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json(result);
        }
    });
};

// update product
module.exports.updateProduct = (req, res) => {
    const { name, description, id } = req.body;
    query.updateProduct(name, description, id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ message: 'Product updated successfully', result });
        }
    });
};

// delete product
module.exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    query.deleteProduct(id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ message: 'Product deleted successfully', result });
        }
    });
};

// update product price
module.exports.updateProductPrice = (req, res) => {
    const { price, id } = req.body;
    query.updateProductPrice(price, id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ message: 'Product price updated successfully', result });
        }
    });
};
