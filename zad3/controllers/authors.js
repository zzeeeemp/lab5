const Author = require('../models/author'); 

exports.getAuthors = (req, res) => {
    const authors = [
        new Author(1, 'Erica Jong'),
        new Author(2, 'Donald J. Sobol')
    ];

    res.render('authors', { authors: authors });
};
