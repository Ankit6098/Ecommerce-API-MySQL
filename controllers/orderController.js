const db = require('../config/db');
const queries = require('../queries/order');

// get all orders
module.exports.getAllOrders = (req, res) => {
    queries.getAllOrders((err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            if (result.length === 0) {
                res.status(404).json({ message: 'There is no order' });
            } else {
                res.status(200).json(result);
            }
        }
    });
}

// create order
module.exports.createOrder = (req, res) => {
    const { user_id, product_id, quantity } = req.params;
    queries.createOrder(user_id, product_id, quantity, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(201).json({ message: 'Order created successfully', result });
        }
    });
}

// get order by user_id
module.exports.getOrderByUserId = (req, res) => {
    const { user_id } = req.params;
    queries.getOrderByUserId(user_id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json(result);
        }
    });
}

// update order
module.exports.updateOrder = (req, res) => {
    const { user_id, product_id, quantity } = req.body;
    queries.updateOrder(user_id, product_id, quantity, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ message: 'Order updated successfully', result });
        }
    });
}

// delete order
module.exports.deleteOrder = (req, res) => {
    const { user_id } = req.params;
    queries.deleteOrder(user_id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ message: 'Order deleted successfully', result });
        }
    });
}