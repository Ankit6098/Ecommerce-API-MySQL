const db = require("../config/db");

// get all payments
function getAllPayments(callback) {
    db.query(`SELECT * FROM payments`, (err, result) => {
        if (err) {
        callback(err, null);
        } else {
        callback(null, result);
        }
    });
}

// create payment
function createPayment(user_id, total, callback) {
    db.query(
        `INSERT INTO payments (user_id, total) VALUES (?, ?)`,
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

// get payment by user_id
function getPaymentByUserId(user_id, callback) {
    db.query(
        `SELECT * FROM payments WHERE user_id = ?`,
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

// update payment
function updatePayment(user_id, total, callback) {
    db.query(
        `UPDATE payments SET total = ? WHERE user_id = ?`,
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

// delete payment
function deletePayment(user_id, callback) {
    db.query(
        `DELETE FROM payments WHERE user_id = ?`,
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
    getAllPayments,
    createPayment,
    getPaymentByUserId,
    updatePayment,
    deletePayment,
};
