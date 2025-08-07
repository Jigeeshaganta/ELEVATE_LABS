const API_URL = 'http://localhost:3000/books';
const bookList = document.getElementById('bookList');
const addBookForm = document.getElementById('addBookForm');
const addTitleInput = document.getElementById('addTitle');
const addAuthorInput = document.getElementById('addAuthor');

// Fetches and displays all books from the API
async function fetchBooks() {
    try {
        const response = await fetch(API_URL);
        const books = await response.json();
        renderBooks(books);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

// Renders the books list on the webpage
function renderBooks(books) {
    bookList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.className = 'book-item';
        li.innerHTML = `
            <span><strong>${book.title}</strong> by ${book.author}</span>
            <div>
                <button class="update" onclick="updateBookPrompt(${book.id}, '${book.title}', '${book.author}')">Update</button>
                <button class="delete" onclick="deleteBook(${book.id})">Delete</button>
            </div>
        `;
        bookList.appendChild(li);
    });
}

// Handles POST request to add a new book
addBookForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = addTitleInput.value;
    const author = addAuthorInput.value;

    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author }),
        });
        addBookForm.reset();
        fetchBooks();
    } catch (error) {
        console.error('Error adding book:', error);
    }
});

// Handles PUT request to update a book
async function updateBook(id, newTitle, newAuthor) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newTitle, author: newAuthor }),
        });
        fetchBooks();
    } catch (error) {
        console.error('Error updating book:', error);
    }
}

// Handles DELETE request to remove a book
async function deleteBook(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        fetchBooks();
    } catch (error) {
        console.error('Error deleting book:', error);
    }
}

// Helper function to prompt user for update details
function updateBookPrompt(id, currentTitle, currentAuthor) {
    const newTitle = prompt('Enter new title:', currentTitle);
    const newAuthor = prompt('Enter new author:', currentAuthor);
    if (newTitle !== null && newAuthor !== null) {
        updateBook(id, newTitle, newAuthor);
    }
}

// Initial fetch to load books when the page loads
fetchBooks();