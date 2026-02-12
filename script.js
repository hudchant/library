// Constructor for book objects
function Book(title, author, pages, read) {

    this.title = title; // Book title
    this.author = author; // Book author
    this.pages = pages; // Number of pages
    this.read = read; // Whether or not the book has been read yet


    this.info = function() { // Function that returns all book info in a single line
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read} `;
    }
}

