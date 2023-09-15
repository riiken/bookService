const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookName: String,
  author: String,
  price: Number,
  pages:Number
});

const Books = mongoose.model('Book', bookSchema);

module.exports = Books;