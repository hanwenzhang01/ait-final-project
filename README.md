# BookShelf

## Overview

A virtual media stand. Users can store lists of books, movies, and albums they enjoy. Users can see the entire media stand on the home page, or see individual lists of books, movies, or albums.

## Data Model

The application will store Books, Movies, and Albums.

* each Book will have an author and title, with  optional elements: reviews (word- or star-based), publication year, and genre
* each Movie with have a title and year, with optional elements: reviews (word- or star-based), maturity rating, and genre
* each Album will have a title and artist, with optional elements: review (word- or star-based), release year, and genre

An Example Book:

```javascript
{
  author: "Colleen Hoover" //string
  title: "Fated" //string
  
  //optional elements
  review: "this book sucks" //string
  stars: 1 //numbered rating 1-5
  year: 2021 //year published
  genre: "Romance" //string
}
```

An Example Movie:

```javascript
{
  title: "Oppenheimer" //string
  year: 2023 //number
  
  //optional elements
  review: "so long" //string
  stars: 3 //numbered rating 1-5
  genre: "Drama" //string
  rating: "R" //string
}
```

An Example Album:

```javascript
{
  title: "1989 (Taylor's Version)" //string
  artist: "Taylor Swift" //string
  
  //optional elements
  review: "amazing love groundbreaking life-changing never-before-seen" //string
  stars: 5 //numbered rating 1-5
  year: 2023 //year published
  genre: "Pop" //string
}
```


## [Link to Commented First Draft Schema](db.mjs) 

# __TO DO: UPDATE WIREFRAMES__
## Wireframes

/home - homepage
<!--![list create](documentation/loginHome.png)-->

/addBook - add a book to the shelf
<!--![list](documentation/allShelf.png)-->

/addMovie - add a movie to the shelf
<!--![list](documentation/allShelf.png)-->

/addAlbum - add an album to the shelf
<!--![list](documentation/allShelf.png)-->

/books - see all books
<!--![list](documentation/allShelf.png)-->

/movies - see all movies
<!--![list](documentation/allShelf.png)-->

/albums - see all albums
<!--![list](documentation/allShelf.png)-->

#  __TO DO: UPDATE SITE MAP__
## Site map
<!--![list create](documentation/siteMap.png)-->

## User Stories
as a user, I can...
* see all my media elements and their information on my home page
* add a new book to my shelf
* add a new movie to my shelf
* add a new album to my shelf
* delete all shelf entries

# TODO: UPDATE RESEARCH TOPICS
## Research Topics

* (3 points) Perform client side form validation using facile (JavaScript library)
    * will validate user input before the form is submitted
    * will only allow valid inputs to be submitted and tell users how to format their input
* (2 points) Use tailwind.css, with reasonable customization of the framework:
  * will improve the appearance of the website
  * will make it easier to style the website for a more modern look
* (2 points) SweetAlert - promise based js library for pop-ups
  * used to alert the user about invalid inputs
* (3 points) dotenv

10 points total out of 10 required points


## [Link to Initial Main Project File](app.mjs) 

## Annotations / References Used

1. [facile github reference](https://github.com/upjs/facile-validator/tree/main#accepted)
2. [tailwind site, used "quick search" for specific styling needs](https://tailwindcss.com/docs/installation)
4. [SweetAlert site, used the "confirm dialog" example from the recipe gallery](https://sweetalert2.github.io/)