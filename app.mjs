import express from 'express'
import path from 'path'
import './config.mjs'
import { fileURLToPath } from 'url';

const app = express();
import session from 'express-session';
import './db.mjs';
import mongoose from 'mongoose';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// configure templating to hbs
app.set('view engine', 'hbs');


mongoose.connect(process.env.DSN);

const Book = mongoose.model('Book');
const Movie = mongoose.model('Movie');
const Album = mongoose.model('Album');

// body parser (req.body)
app.use(express.urlencoded({ extended: false }));

/*
// session stuff
const sessionOptions = { 
	secret: 'session id secret 123', 
	saveUninitialized: false, 
	resave: false
};
app.use(session(sessionOptions));
// middleware to log requests
app.use(function(req, res, next){
  //storing session books
  req.session.books = req.session.books || [];
  res.locals.books = req.session.books;

  //storing session movies
  req.session.movies = req.session.movies || [];
  res.locals.movies = req.session.movies;

  //storing session albums
  req.session.albums = req.session.albums || [];
  res.locals.albums = req.session.albums;
  next();
});
*/
let booksArr = [];
let moviesArr = [];
let albumsArr = [];

/*
function filterBooks(req) {
    const filterObj = {};
    if (req.query['semesterQ']) {
      filterObj.semester = req.query['semesterQ'];
      console.log('typeof filterObj.semester: ',typeof filterObj.semester);
    }
    if (req.query['yearQ']) {
      filterObj.year = Number(req.query['yearQ']);
      console.log('typeof filterObj.year: ',typeof filterObj.year);
    }
    if (req.query['profQ']) {
      filterObj.professor = req.query['profQ'];
      console.log('typeof filterObj.professor: ',typeof filterObj.professor);
    }
    console.log('filterObj: ',filterObj);
    return filterObj;
  }
  */
  
  app.get('/', async (req, res) => {
    //res.send('TODO: add / modify routes')
    const books = await Book.find();
    const movies = await Movie.find();
    const albums = await Album.find();
    //console.log('typeof rev: ',typeof rev);
    //console.log(rev);
    res.render('home', {books, movies, albums});
  });

  app.get('/addBook', async (req, res) => {
    res.render('addBook');
  });

  app.post('/addBook', async (req, res) => {
    const book = new Book({
      title: req.body.title.trim(),
      author: req.body.author.trim(),

      stars: req.body.stars,
      review: req.body.review.trim(),
      year: req.body.year,
      genre: req.body.genre.trim()
    });
    //hi lol
    //req.session.books.push(book);
    booksArr.push(book);
    await book.save();
    res.redirect('/');
  });

  app.get('/addMovie', async (req, res) => {
    res.render('addMovie');
  });

  app.post('/addMovie', async (req, res) => {
    const movie = new Movie({
      title: req.body.title.trim(),
      year: req.body.year,

      stars: req.body.stars,
      review: req.body.review.trim(),
      rating: req.body.rating,
      genre: req.body.genre.trim()
    });
    moviesArr.push(movie);
    await movie.save();
    res.redirect('/');
  });
  /*
  app.get('/reviews/add', (req,res) => {
    res.render('add');
  });
  
  app.get('/reviews/mine', (req,res) => {
    res.render('reviews', {rev: req.session.reviews});
  });
  
  app.post('/reviews/add', async (req,res) => {
    const review = new Review({
      courseNumber: req.body.courseNumber.trim(),
      courseName: req.body.courseName.trim(),
      semester: req.body.semester,
      year: req.body.year,
      professor: req.body.professor.trim(),
      review: req.body.review.trim()
    });
    req.session.reviews.push(review);
    await review.save();
    //console.log('review: ', await Review.find());
    res.redirect('/');
  });
  */

app.listen(process.env.PORT ?? 3000);