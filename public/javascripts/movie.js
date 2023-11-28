
//function main () {
  //title
  const titleSelector = document.querySelector('#title');
  let title = '';
  titleSelector.addEventListener('input', handleTitle);
  function handleTitle(evt) {
    title=evt.target.value;
  }

  const yearSelector = document.querySelector('#year');
  let year = 0;
  titleSelector.addEventListener('input', handleYear);
  function handleYear(evt) {
    year=evt.target.value;
  }

  const starsSelector = document.querySelector('#stars');
  let stars = '';
  starsSelector.addEventListener('input', handleStars);
  function handleStars(evt) {
    stars=evt.target.value;
  }

  const reviewSelector = document.querySelector('#review');
  let review = '';
  reviewSelector.addEventListener('input', handleReview);
  function handleReview(evt) {
    review=evt.target.value;
  }

  const ratingSelector = document.querySelector('#rating');
  let rating = '';
  ratingSelector.addEventListener('input', handleRating);
  function handleRating(evt) {
    rating=evt.target.value;
  }

  const genreSelector = document.querySelector('#genre');
  let genre = '';
  genreSelector.addEventListener('input', handleGenre);
  function handleGenre(evt) {
    genre=evt.target.value;
  }
  
  //submit button
  const submit = document.querySelector('#submitButton');

  submit.addEventListener('click', function (evt) {
      console.log('submit button clicked');
      //prevents page from refreshing (making a GET/POST request)
      evt.preventDefault();
      const valid = validate();
      if (valid) {
        evt.redirect('/');
      }
      else {
        alert('Invalid input!');
      }
  });

  function validate() {
    let reqValid = false;
    if (title.length>0 && year.length>0) {
      reqValid = year%1===0 && year>=1888 && year<=2023;
    }
    console.log("!review", !review);
    return reqValid;
}

// delays main execution until DOM has loaded
document.addEventListener('DOMContentLoaded', main);