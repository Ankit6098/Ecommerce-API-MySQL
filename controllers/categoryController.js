const db = require('../config/db');
const queries = require('../queries/category');

// get all categories
module.exports.getAllCategories = (req, res) => {
    queries.getAllCategories((err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            if (result.length === 0) {
                res.status(404).json({ message: 'There is no category' });
            } else {
                res.status(200).json(result);
            }
        }
    });
};

// create category
module.exports.createCategory = (req, res) => {
    const { name, description } = req.body;
    queries.createCategory(name, description, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(201).json({ message: 'Category created successfully', result });
        }
    });
}

// get category by name
module.exports.getCategoryByName = (req, res) => {
    const { name } = req.params;
    queries.getCategoryByName(name, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json(result);
        }
    });
}

// get category by id
module.exports.getCategoryById = (req, res) => {
    const { id } = req.params;
    queries.getCategoryById(id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json(result);
        }
    });
}

// update category
module.exports.updateCategory = (req, res) => {
    const { name, id } = req.body;
    queries.updateCategory(name, id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ message: 'Category updated successfully', result });
        }
    });
}

// delete category
module.exports.deleteCategory = (req, res) => {
    const { id } = req.params;
    queries.deleteCategory(id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ message: 'Category deleted successfully', result });
        }
    });
}
