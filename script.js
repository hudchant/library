// Array to hold user's book collection
let myLibrary = [];

// Constructor for book objects
function Book(title, author, pages, read) {

    this.id = crypto.randomUUID();
    this.title = title; // Book title
    this.author = author; // Book author
    this.pages = pages; // Number of pages
    this.read = read; // Whether or not the book has been read yet

    this.info = function () { // Function that returns all book details
        return `<div class='book-entry'>
        <div class='book-title'>${this.title}</div> 
        <div class='book-author'>by ${this.author}</div>
        <div class='num-of-pages'>${this.pages} pages</div>
        <div class='read-or-unread'><button class='status-btn'>${this.read}</button></div>
        <div class='remove-book'><button class='delete-btn'>X</div></div>
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
    // Call function to show all books
    showBooks();
}

// Book prototype function that toggles a book instance’s read status
Book.prototype.updateStatus = function() {
    this.read = this.read === 'Read' ? 'Unread' : 'Read';
}

// Function for displaying books
function showBooks() {
    const ul = document.querySelector('ul'); // Ul reference
    ul.innerHTML = ''; // Clear ul after adding a book to prepare for the next entry
    myLibrary.forEach((book, index) => {
        const li = document.createElement('li'); // Create new li
        li.classList.add('card'); // Create class name for li's to be referenced in css
        li.innerHTML = book.info(); // Call .info() method from Book object to display books on page
        ul.appendChild(li); // Append books to ul element

        const deleteButton = li.querySelector('.delete-btn'); // Reference to delete button
        deleteButton.addEventListener('click', () => {
            // When a book's delete button is clicked, delete book at that particular index of myLibrary array
            myLibrary.splice(index, 1);
            showBooks(); // Refresh book display
        }); 

        const statusButton = li.querySelector('.status-btn'); // Reference to status button
        statusButton.addEventListener('click', () => {
            // Variable to determine index of current book when button is clicked
            let currentBook = myLibrary[index];
            // Call prototype function to update book status upon button click
            currentBook.updateStatus();
            showBooks(); // Refresh book display
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const bookButton = document.querySelector('.book-btn'); // Reference to the 'Add New Book' button
    const modalDialog = document.querySelector('#modal-dialog'); // Reference to the modal dialog
    const cancelButton = document.querySelector('#cancel-btn'); // Reference to form cancellation button
    const modalForm = modalDialog.querySelector('form'); // Reference to the form element

    // Event that opens the modal form when user clicks 'Add New Book' button
    bookButton.addEventListener('click', () => {
        modalDialog.showModal();
    });

    // Function for form's submit button
    modalForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stops page from refreshing upon clicking submit button

        // User input fields to be passed to addBookToLibrary function
        const bookTitle = document.querySelector('#the-title').value;
        const bookAuthor = document.querySelector('#the-author').value;
        const bookPages = document.querySelector('#book-pages').value;
        let readOrNot = document.querySelector('#read-yet').value;
        readOrNot === 'Yes' ? readOrNot = 'Read' : readOrNot = 'Unread';
        // Call function to add a new book
        addBookToLibrary(bookTitle, bookAuthor, bookPages, readOrNot);

        // Close and reset modal dialog form after a book submission
        modalDialog.close();
        modalForm.reset();
    });

    // Close modal dialog when cancel button is clicked
    cancelButton.addEventListener('click', () => {
        modalDialog.close();
    });   
});







