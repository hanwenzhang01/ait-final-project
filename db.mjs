import mongoose from 'mongoose';

mongoose.connect('mongodb://server:port');

const User = new mongoose.Schema({
    username: {type: String, required: true}, //username
    hash: {type: String, required: true}, // a password (hashed already),
    bookshelves: [Array, Array, Array]
    // ex: [wantToRead, reading, read] // an array of 3 sub-arrays
    // each sub-array stores Book objects
});

const Book = new mongoose.Schema({
    // a reference to a User object
    user: {type: String, required: true}, 
    // a string representing the bookshelf
    shelf: {type: String, required: true}, 
    // the author's name
    author: {type: String, required: true},
    // the book title
    title: {type: String, required: true},
    // user's reading progress, varies depending on the bookshelf
    progress: {type: Number, required: true},
  
  //optional elements
    // user review, in words
    review: {type: String, required: false},
    // user review, in stars (0-5)
    stars: {type: Number, required: false},
    // date the user started reading the book
    startDate: {type: Date, required: false},
    // date the user stopped reading the book
    endDate: {type: Date, required: false},
    // the year the book was published
    year: {type: Number},
    // book genre
    genre: {type: String, required: false},
    // book summary
    summary: {type: String, required: false}
});

mongoose.model('User', User);
mongoose.model('Book', Book);