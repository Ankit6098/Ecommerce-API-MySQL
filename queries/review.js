const db = require("../config/db");

// get all reviews
function getAllReviews(callback) {
    db.query(`SELECT * FROM reviews`, (err, result) => {
        if (err) {
        callback(err, null);
        } else {
        callback(null, result);
        }
    });
}

// create review
function createReview(product_id, user_id, rating, comment, callback) {
    db.query(
        `INSERT INTO reviews (product_id, user_id, rating, comment) VALUES (?, ?, ?, ?)`,
        [product_id, user_id, rating, comment],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// get review by user_id
function getReviewByUserId(user_id, callback) {
    db.query(
        `SELECT * FROM reviews WHERE user_id = ?`,
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

// update review
function updateReview(product_id, user_id, rating, comment, callback) {
    db.query(
        `UPDATE reviews SET rating = ?, comment = ? WHERE product_id = ? AND user_id = ?`,
        [rating, comment, product_id, user_id],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// delete review
function deleteReview(product_id, user_id, callback) {
    db.query(
        `DELETE FROM reviews WHERE product_id = ? AND user_id = ?`,
        [product_id, user_id],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// get review by product_id
function getReviewByProductId(product_id, callback) {
    db.query(
        `SELECT * FROM reviews WHERE product_id = ?`,
        [product_id],
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
    getAllReviews,
    createReview,
    getReviewByUserId,
    updateReview,
    deleteReview,
    getReviewByProductId,
};