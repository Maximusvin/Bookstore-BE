const {Schema, model} = require('mongoose');

const bookSchema = new Schema({
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        inStock: {
            type: Boolean,
            default: false,
        },
        reviews: {
            type: String,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    });

const bookModel = model('book', bookSchema);

module.exports = {
    Book: bookModel,
}