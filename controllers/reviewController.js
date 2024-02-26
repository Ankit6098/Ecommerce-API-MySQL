const db = require('../config/db');
const queries = require('../queries/review');

// get all reviews
module.exports.getAllReviews = (req, res) => {
    queries.getAllReviews((err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            if (result.length === 0) {
                res.status(404).json({ message: 'There is no review' });
            } else {
                res.status(200).json(result);
            }
        }
    });
}

// create review
module.exports.createReview = (req, res) => {
    const { user_id, product_id, review } = req.body;
    queries.createReview(user_id, product_id, review, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(201).json({ message: 'Review created successfully', result });
        }
    });
}

// get review by user_id
module.exports.getReviewByUserId = (req, res) => {
    const { user_id } = req.params;
    queries.getReviewByUserId(user_id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json(result);
        }
    });
}

// update review
module.exports.updateReview = (req, res) => {
    const { user_id, product_id, review } = req.body;
    queries.updateReview(user_id, product_id, review, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ message: 'Review updated successfully', result });
        }
    });
}

// delete review
module.exports.deleteReview = (req, res) => {
    const { user_id } = req.params;
    queries.deleteReview(user_id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ message: 'Review deleted successfully', result });
        }
    });
}

// get review by product_id
module.exports.getReviewByProductId = (req, res) => {
    const { product_id } = req.params;
    queries.getReviewByProductId(product_id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json(result);
        }
    });
}