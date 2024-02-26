const db = require("../config/db");

// get all categories
function getAllCategories(callback) {
    db.query(`SELECT * FROM categories`, (err, result) => {
        if (err) {
        callback(err, null);
        } else {
        callback(null, result);
        }
    });
}

// create category
function createCategory(name, description, callback) {
    db.query(
        `INSERT INTO categories (name, description) VALUES (?, ?)`,
        [name, description],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// get category by name
function getCategoryByName(name, callback) {
    db.query(
        `SELECT * FROM categories WHERE name = ?`,
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

// get category by id
function getCategoryById(id, callback) {
    db.query(
        `SELECT * FROM categories WHERE id = ?`,
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

// update category
function updateCategory(name, id, callback) {
    db.query(
        `UPDATE categories SET name = ? WHERE id = ?`,
        [name, id],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    );
}

// delete category
function deleteCategory(id, callback) {
    db.query(
        `DELETE FROM categories WHERE id = ?`,
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

module.exports = {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryByName,
    getCategoryById,
}