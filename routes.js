const express = require('express');
const Book = require('./book');

const router = express.Router();

// Create a new book
router.post('/books', async (req, res) => {
  const { bookName, author ,price , pages} = req.body;

  try {
    const book = new Book({ bookName, author ,price , pages });
    await book.save();
    res.send("Book Added Succesfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all books
router.get('/books', async (req, res) => {
  try {
    const book = await Book.find({});
    res.send(book);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update a book
router.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  const { bookName, author ,price , pages } = req.body;

  try {
    const book = await Book.findByIdAndUpdate(id, { bookName, author ,price , pages}, { new: true });
    res.send("Book updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a book
router.delete('/books/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);
    res.send("Book deleted succesfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// get one book

router.get('/books/:id', async (req, res) => {
  try{
      const data = await Book.findById(req.params.id);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
  }
})

module.exports=router;