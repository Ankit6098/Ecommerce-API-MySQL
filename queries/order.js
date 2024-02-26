const db = require("../config/db");

// get all orders
function getAllOrders(callback) {
    db.query(`SELECT * FROM orders`, (err, result) => {
        if (err) {
        callback(err, null);
        } else {
        callback(null, result);
        }
    });
}

// create order
function createOrder(user_id, total, callback) {
    db.query(
        `INSERT INTO orders (user_id, total) VALUES (?, ?)`,
        [user_id, total],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// get order by user_id
function getOrderByUserId(user_id, callback) {
    db.query(
        `SELECT * FROM orders WHERE user_id = ?`,
        [user_id],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// update order
function updateOrder(user_id, total, callback) {
    db.query(
        `UPDATE orders SET total = ? WHERE user_id = ?`,
        [total, user_id],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// delete order
function deleteOrder(user_id, callback) {
    db.query(
        `DELETE FROM orders WHERE user_id = ?`,
        [user_id],
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
    getAllOrders,
    createOrder,
    getOrderByUserId,
    updateOrder,
    deleteOrder,
};