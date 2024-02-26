const db = require("../config/db");

const createReviewTable = `
CREATE TABLE IF NOT EXISTS review (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    review TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
    )
`;

module.exports = {
    createReviewTable
}