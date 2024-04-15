const Book = require('../models/book');


exports.getBooks = (req, res) => {
    
    const books = [
        new Book(1, 'Book 1', 'Erica Jong'),
        new Book(2, 'Book 2', 'Donald J. Sobol')
    ];

    res.render('books', { books: books });
};
