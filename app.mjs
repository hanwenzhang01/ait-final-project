import express from 'express';
import path from 'path';
import './config.mjs';
import { fileURLToPath } from 'url';
import Swal from 'sweetalert2';


const app = express();
//import session from 'express-session';
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
const booksArr = [];
const moviesArr = [];
const albumsArr = [];

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
 /*
  async function deleteAll() {
    await Book.deleteMany({});
    await Movie.deleteMany({});
    await Album.deleteMany({});
  }*/

  app.get('/delete', async(req,res) => {
    /*Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
        deleteAll();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });*/
    await Book.deleteMany({});
    await Movie.deleteMany({});
    await Album.deleteMany({});
    res.redirect('/');
  });

  app.get('/', async (req, res) => {
    const books = await Book.find();
    const movies = await Movie.find();
    const albums = await Album.find();
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
    //req.session.movies.push(movie);
    moviesArr.push(movie);
    await movie.save();
    res.redirect('/');
  });

  app.get('/addAlbum', async (req, res) => {
    res.render('addAlbum');
  });

  app.post('/addAlbum', async (req, res) => {
    console.log('start of post')
    const album = new Album({
      title: req.body.title.trim(),
      artist: req.body.artist.trim(),

      stars: req.body.stars,
      review: req.body.review.trim(),
      year: req.body.year,
      genre: req.body.genre.trim()
    });
    //req.session.albums.push(album);
    console.log('before push')
    albumsArr.push(album);
    console.log('before save')
    await album.save();
    console.log('before redirect');
    res.redirect('/');
  });
  

app.listen(process.env.PORT ?? 3000);