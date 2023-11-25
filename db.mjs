import mongoose from 'mongoose';

mongoose.connect(process.env.DSN);


//Each book entry includes the author, title, with an optional publication year, genre, and review. 
const Book = new mongoose.Schema({
  // the book title
  title: {type: String, required: true},
  // the author's name
  author: {type: String, required: true},

//optional elements
  // user review, in stars (0-5)
  stars: {type: Number, required: false},
  // user review, in words
  review: {type: String, required: false},
  // the year the book was published
  year: {type: Number, required: false},
  // genre
  genre: {type: String, required: false}
});


//Each movie entry includes the title and year, with an optional maturity rating, genre, and review. 
const Movie = new mongoose.Schema({
  // the movie title
  title: {type: String, required: true},
  // the year the movie was released
  year: {type: Number, required: true},

//optional elements
  // user review, in stars (0-5)
  stars: {type: Number, required: false},
  // user review, in words
  review: {type: String, required: false},
  // maturity rating
  rating: {type: String, required: false},
  // genre
  genre: {type: String, required: false}
});


//Each album entry includes the title and artist, with an optional release year, genre, and review.
const Album = new mongoose.Schema({
  // the album title
  title: {type: String, required: true},
  // the musical artist
  artist: {type: String, required: true},

//optional elements
  // user review, in stars (1-5)
  stars: {type: Number, required: false},
  // user review, in words
  review: {type: String, required: false},
  // release year
  year: {type: Number, required: false},
  // genre
  genre: {type: String, required: false}
});

mongoose.model('Book', Book);
mongoose.model('Movie', Movie);
mongoose.model('Album', Album);