const db = require("../config/db");

// create connected category table with product table
const createCategoryTable = `
CREATE TABLE IF NOT EXISTS category (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
    )
`;

module.exports = {
    createCategoryTable,
    };