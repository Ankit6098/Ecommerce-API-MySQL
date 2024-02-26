const db = require('../config/db');
const queries = require('../queries/payment');

// get all payments
module.exports.getAllPayments = (req, res) => {
    queries.getAllPayments((err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            if (result.length === 0) {
                res.status(404).json({ message: 'There is no payment' });
            } else {
                res.status(200).json(result);
            }
        }
    });
}

// create payment
module.exports.createPayment = (req, res) => {
    const { user_id, amount, status } = req.body;
    queries.createPayment(user_id, amount, status, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(201).json({ message: 'Payment created successfully', result });
        }
    });
}

// get payment by user_id
module.exports.getPaymentByUserId = (req, res) => {
    const { user_id } = req.params;
    queries.getPaymentByUserId(user_id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json(result);
        }
    });
}

// update payment
module.exports.updatePayment = (req, res) => {
    const { user_id, amount, status } = req.body;
    queries.updatePayment(user_id, amount, status, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ message: 'Payment updated successfully', result });
        }
    });
}

// delete payment
module.exports.deletePayment = (req, res) => {
    const { user_id } = req.params;
    queries.deletePayment(user_id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ message: 'Payment deleted successfully', result });
        }
    });
}