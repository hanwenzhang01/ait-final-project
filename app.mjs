import express from 'express';
import path from 'path';
import './config.mjs';
import { fileURLToPath } from 'url';

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
 
  async function deleteAll() {
    await Book.deleteMany({});
    await Movie.deleteMany({});
    await Album.deleteMany({});
  }

  app.get('/', async (req, res) => {
    const books = await Book.find();
    const movies = await Movie.find();
    const albums = await Album.find();
    res.render('home', {books, movies, albums});
  });

  app.post('/', async (req, res) => {
    if(req.body.delete === "yes"){
      await deleteAll();
    }
    res.redirect('/');
  });

  app.get('/favorites', (req,res) => {
    const favBooks = booksArr.filter(book => book.stars >= 4);
    const favMovies = moviesArr.filter(movie => movie.stars >= 4);
    const favAlbums = albumsArr.filter(album => album.stars >= 4);
    res.render('favorites', {favBooks, favMovies, favAlbums});
  });

  app.get('/recents', (req,res) => {
    const recentBooks = booksArr.filter(book => book.year == 2023);
    const recentMovies = moviesArr.filter(movie => movie.year == 2023);
    const recentAlbums = albumsArr.filter(album => album.year == 2023);
    res.render('recents', {recentBooks, recentMovies, recentAlbums});
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

  app.get('/addAlbum', async (req, res) => {
    res.render('addAlbum');
  });

  app.post('/addAlbum', async (req, res) => {
    const album = new Album({
      title: req.body.title.trim(),
      artist: req.body.artist.trim(),

      stars: req.body.stars,
      review: req.body.review.trim(),
      year: req.body.year,
      genre: req.body.genre.trim()
    });
    albumsArr.push(album);
    await album.save();
    res.redirect('/');
  });
  

app.listen(process.env.PORT ?? 3000);