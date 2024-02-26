const db = require('../config/db');
const queries = require('../queries/cart');
const isAuth = require('../config/isAuth');

// get all carts
module.exports.getAllCarts = (req, res) => {
    queries.getAllCarts((err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            if (result.length === 0) {
                res.status(404).json({ message: 'Cart is empty' });
            } else {
                res.status(200).json(result);
            }
        }
    });
}

// create cart
module.exports.createCart = (req, res) => {
    // check the user is authenticated
    if (!isAuth) {
        res.status(401).json({ message: 'You are not authenticated' });
    } else {
        const { product_id, user_id, quantity } = req.body;
        queries.createCart(product_id, user_id, quantity, (err, result) => {
            if (err) {
                res.status(400).json({ error: err });
            } else {
                res.status(201).json({ message: 'Cart created successfully', result });
            }
        });
    }
}

// get cart by user_id
module.exports.getCartByUserId = (req, res) => {
    const { user_id } = req.params;
    queries.getCartByUserId(user_id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json(result);
        }
    });
}

// update cart
module.exports.updateCart = (req, res) => {
    if (!isAuth) {
        res.status(401).json({ message: 'You are not authenticated' });
    } else {
        const { product_id, user_id, quantity } = req.body;
        queries.updateCart(product_id, user_id, quantity, (err, result) => {
            if (err) {
                res.status(400).json({ error: err });
            } else {
                res.status(200).json({ message: 'Cart updated successfully', result });
            }
        });
    }
}

// delete cart
module.exports.deleteCart = (req, res) => {
    if (!isAuth) {
        res.status(401).json({ message: 'You are not authenticated' });
    } else {
        const { user_id } = req.params;
        queries.deleteCart(user_id, (err, result) => {
            if (err) {
                res.status(400).json({ error: err });
            } else {
                res.status(200).json({ message: 'Cart deleted successfully', result });
            }
        });
    }
}