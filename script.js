// Array to hold user's book collection
const myLibrary = [];

// Constructor for book objects
function Book(title, author, pages, read) {

    this.id = crypto.randomUUID();
    this.title = title; // Book title
    this.author = author; // Book author
    this.pages = pages; // Number of pages
    this.read = read; // Whether or not the book has been read yet

    this.info = function () { // Function that returns all book info in a single line
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read} `;
    }
}

// Function for creating new books and storing them
function addBookToLibrary(bookTitle, bookAuthor, numOfPages, readingStatus) {
    // Create new book
    let newBook = new Book(bookTitle, bookAuthor, numOfPages, readingStatus);
    // If new book object is created, push it into myLibrary array
    if (newBook) {
        myLibrary.push(newBook);
    }
    // return new book details
    return newBook;
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container'); // Container reference
    const ul = document.querySelector('ul'); // Ul reference
    container.appendChild(ul); // Append the ul to the container div

    // For each loop that creates a new li element for each book pushed into myLibrary array
    myLibrary.forEach(book => {
        const li = document.createElement('li'); // Create new li
        li.textContent = book.info(); // Call .info() method from Book object to display books on page
        ul.appendChild(li); // Append books to ul element
    });
});




