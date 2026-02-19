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
        return `<div class='book-entry'>
        <div class='book-title'>${this.title}</div> 
        <div class='book-author'>by ${this.author}</div>
        <div class='num-of-pages'>${this.pages} pages</div>
        <div class='read-or-unread'>${this.read}</div>
        </div>`;
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
    // For each loop that creates a new li element for each book pushed into myLibrary array
    myLibrary.forEach(book => {
        const ul = document.querySelector('ul'); // Ul reference
        const li = document.createElement('li'); // Create new li
        li.classList.add('card'); // Create class name for li's to be referenced in css
        li.innerHTML = book.info(); // Call .info() method from Book object to display books on page
        ul.appendChild(li); // Append books to ul element
    });
});

const bookButton = document.querySelector('.book-btn'); // Reference to the 'Add New Book' button
const modalDialog = document.querySelector('#modal-dialog'); // Reference to the modal dialog

// Event that opens the modal form when user clicks 'Add New Book' button
bookButton.addEventListener("click", () => {
    modalDialog.showModal();
  });

// Manually add books for testing purposes
addBookToLibrary('Matilda', 'Roald Dahl', 255, 'Unread');
addBookToLibrary('The Hunger Games', 'Suzanne Collins', 565, 'Read');
addBookToLibrary('Divergent', 'Veronica Roth', 478, 'Read');
addBookToLibrary('Chronicles of Narnia: The Lion, The Witch, and the Wardrobe', 'An Author', 478, 'Read');
addBookToLibrary('Walk Two Moons', 'Some Author', 255, 'Unread');
addBookToLibrary('Walk Two Moons', 'Some Author', 255, 'Unread');
addBookToLibrary('This is a really long book title, a super long book title', 'Some Author', 255, 'Unread');
addBookToLibrary('Walk Two Moons', 'Some Author', 255, 'Unread');
addBookToLibrary('Walk Two Moons', 'Some Author', 255, 'Unread');
addBookToLibrary('Walk Two Moons', 'Some Author', 255, 'Unread');
addBookToLibrary('Walk Two Moons', 'Some Author', 255, 'Unread');
addBookToLibrary('Walk Two Moons', 'Some Author', 255, 'Unread');

console.log(myLibrary);




