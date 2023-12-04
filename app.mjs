import express from 'express';
import path from 'path';
import './config.mjs';
import { fileURLToPath } from 'url';

const app = express();
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
      //hi!
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
    await album.save();
    res.redirect('/');
  });
  

app.listen(process.env.PORT ?? 3000);