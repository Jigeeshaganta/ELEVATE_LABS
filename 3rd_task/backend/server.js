const express = require('express');
const app = express();
const port = 3000;

// Enable CORS for the frontend
const cors = require('cors');
app.use(cors());

app.use(express.json());

// In-memory data store
let books = [
    { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen' }
];
let nextId = 3;

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).send('Title and author are required.');
    }
    const newBook = { id: nextId++, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT update a book by ID
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author } = req.body;
    const book = books.find(b => b.id === bookId);

    if (book) {
        if (title) book.title = title;
        if (author) book.author = author;
        res.json(book);
    } else {
        res.status(404).send('Book not found.');
    }
});

// DELETE a book by ID
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const initialLength = books.length;
    books = books.filter(b => b.id !== bookId);

    if (books.length < initialLength) {
        res.status(204).send(); // 204 No Content on successful deletion
    } else {
        res.status(404).send('Book not found.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});