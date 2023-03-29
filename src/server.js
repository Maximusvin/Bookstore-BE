const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const mongoose = require('mongoose');
require('dotenv').config();

const {booksRouter} = require("./routers/booksRouter");

const {PORT = 3000, MONGO_URL} = process.env;

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/api/books', booksRouter);

app.use((req, res, next) => {
    res.status(404).json({message: 'Not found'})
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message || 'Server error'});
});

const runServer = async () => {
    try {
        await mongoose.connect(MONGO_URL);

        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`)
        })

    } catch (err) {
        console.log(err.message);
        process.exit(1)
    }
};

runServer();
