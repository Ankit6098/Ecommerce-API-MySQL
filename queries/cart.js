const db = require("../config/db");

// get all carts
function getAllCarts(callback) {
  db.query(`SELECT * FROM cart`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

// create cart
function createCart(product_id, user_id, quantity, callback) {
  db.query(
    `INSERT INTO cart (product_id, user_id, quantity) VALUES (?, ?, ?)`,
    [product_id, user_id, quantity],
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

// get cart by user_id
function getCartByUserId(user_id, callback) {
  db.query(`SELECT * FROM cart WHERE user_id = ?`, [user_id], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

// update cart
function updateCart(product_id, user_id, quantity, callback) {
  db.query(
    `UPDATE cart SET product_id = ?, quantity = ? WHERE user_id = ?`,
    [product_id, quantity, user_id],
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

// delete cart
function deleteCart(user_id, callback) {
  db.query(`DELETE FROM carts WHERE user_id = ?`, [user_id], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

module.exports = {
  getAllCarts,
  createCart,
  getCartByUserId,
  updateCart,
  deleteCart,
};
