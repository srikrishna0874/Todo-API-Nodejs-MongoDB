const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/todo').on('open', () => {
    console.log("MongoDB connected successfully");
}).on('error', () => {
    console.log("Error in connecting MongoDB");
});

module.exports = connection;