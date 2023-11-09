# BookShelf

# __TODO: THINK ABOUT EDITING?__
## Overview

A virtual media stand. Users can store lists of books, movies, and albums they enjoy. Users can see the entire media stand on the home page, or see individual lists of books, movies, or albums. **__users can also edit items?? or not lol__**

## Data Model

The application will store Users and Books

* users will have three bookshelves (arrays of Books)
  * these bookshelves will sort a User's Books into 'want to read', 'currently reading', and 'read' categories
* each Book will have an author, title, shelf, and progress %, with an optional start/end date, review, star review, year, genre, and summary
  * Users can only change the progress % for books they are currently reading, while 'want to read' will be set at 0% and 'read' will be set at 100%
  * Users can only create a word/star review for books they have read

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

# __!!! TODO: UPDATE WIREFRAMES !!!__
## Wireframes

/home - homepage before logging in
![list create](documentation/loginHome.png)

/home - homepage after logging in
![list](documentation/userHome.png)

/all - all books
![list](documentation/allShelf.png)

/wtr/add - adding to the 'want to read' shelf
![list](documentation/wtrAdd.png)

/wtr/all - viewing the entire 'want to read' shelf
![list](documentation/wtrShelf.png)

/wtr/move - moving a book from 'want to read' to 'currently reading'
![list](documentation/moveReading.png)

/reading/add - adding to the 'currently reading' shelf
![list](documentation/readingAdd.png)

/reading/all - viewing the entire 'currently reading' shelf
![list](documentation/readingShelf.png)

/reading/move - moving a book from 'currently reading' to 'read'
![list](documentation/moveRead.png)

/read/add - adding to the 'read' shelf
![list](documentation/readAdd.png)

/read/all - viewing the entire 'read' shelf
![list](documentation/readShelf.png)

# __!!! TODO: UPDATE SITE MAP !!!__
## Site map
![list create](documentation/siteMap.png)

# __!!! TODO: UPDATE USER STORIES !!!__
## User Stories or Use Cases

* as a user, I can...

# __!!! TODO: UPDATE RESEARCH TOPICS !!!__
## Research Topics

* (3 points) Perform client side form validation using custom JavaScript or JavaScript library
    * will validate user input before the form is submitted
    * will only allow valid inputs to be submitted and tell users how to format their input
    * I will use custom JavaScript/a JavaScript library to achieve this task
* (2 points) Use a CSS framework or UI toolkit, with reasonable customization of the framework:
  * will improve the appearance of the website
  * will make it easier to style the website for a more modern look
  * possible choices: tailwind.css, Semantic UI, Bootstrap
* (5 points) Automated functional testing for all of the routes
    * will automate the web app for testing
    * will be more robust than the testing I've done so far
    * possible choices: Selenium, Headless Chrome
  * (2 points) SweetAlert - promise based js library??

10 points total out of 10 required points


## [Link to Initial Main Project File](app.mjs) 

## Annotations / References Used

1. [tailwind.css site](https://tailwindcss.com/)
2. [Bootstrap site](https://getbootstrap.com/)
3. [semantic UI site](https://semantic-ui.com/)
4. [Selinium site](https://www.selenium.dev/)
5. [Headless Chrome site](https://developer.chrome.com/blog/headless-karma-mocha-chai/)