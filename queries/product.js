const db = require("../config/db");

// get all products
function getAllProducts(callback) {
    db.query(`SELECT * FROM products`, (err, result) => {
        if (err) {
        callback(err, null);
        } else {
        callback(null, result);
        }
    });
}

// create product
function createProduct(name, description, price, category, callback) {
    db.query(
        `INSERT INTO products (name, description, price, category) VALUES (?, ?, ?, ?)`,
        [name, description, price, category],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// get product by name
function getProductByName(name, callback) {
    db.query(
        `SELECT * FROM products WHERE name = ?`,
        [name],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// get product by id
function getProductById(id, callback) {
    db.query(
        `SELECT * FROM products WHERE id = ?`,
        [id],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// update product
function updateProduct(name, description, id, callback) {
    db.query(
        `UPDATE products SET name = ?, description = ? WHERE id = ?`,
        [name, description, id],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// delete product
function deleteProduct(id, callback) {
    db.query(
        `DELETE FROM products WHERE id = ?`,
        [id],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// update product price
function updateProductPrice(price, id, callback) {
    db.query(
        `UPDATE products SET price = ? WHERE id = ?`,
        [price, id],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}


module.exports = {
    getAllProducts,
    createProduct,
    getProductByName,
    getProductById,
    updateProduct,
    deleteProduct,
    updateProductPrice,
};