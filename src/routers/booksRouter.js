const {Router} = require('express');

const {
    getBooksController,
    getBookByIdController,
    createBookController,
    deleteBookController,
    updateBookController,
} = require("../controllers/booksControllers");

const booksRouter = Router();

booksRouter.get('/', getBooksController);
booksRouter.get('/:id', getBookByIdController);
booksRouter.post('/', createBookController);
booksRouter.delete('/:id', deleteBookController);
booksRouter.put('/:id', updateBookController);

module.exports = {
    booksRouter,
}
