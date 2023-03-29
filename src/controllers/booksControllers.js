const {Book} = require('../model/bookModel');

const getBooksController = async (req, res, next) => {
    try {
        const {favorite, page, limit} = req.query;

        const paginationPage = +page || 1;
        const paginationLimit = +limit || 6;
        const skip = (paginationPage - 1) * paginationLimit;
        const findOptional = favorite ? {favorite} : {};

        const total = await Book.count();

        const books = await Book.find(findOptional).skip(skip).limit(paginationLimit);

        res.status(200).json({
            books,
            count: books.length,
            total,
        });
    } catch (err) {
        next(err);
    }
}

const getBookByIdController = async (req, res, next) => {
    try {

    } catch (err) {

    }
}

const createBookController = async (req, res, next) => {
    try {

    } catch (err) {

    }
}

const deleteBookController = async (req, res, next) => {
    try {

    } catch (err) {

    }
}

const updateBookController = async (req, res, next) => {
    try {

    } catch (err) {

    }
}

module.exports = {
    getBooksController,
    getBookByIdController,
    createBookController,
    deleteBookController,
    updateBookController,
}
