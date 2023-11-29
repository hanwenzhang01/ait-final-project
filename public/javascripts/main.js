//import express from '../express';
import { Validator, enLang as en } from '../facile-validator/dist/index.mjs';

// Select the container element that contains the fields
const form = document.querySelector('form');

// Create an instance of Validator for the container element
const v = new Validator(form, {
  lang: en,
});

form.addEventListener('submit', (event) => {
  // Call validate method to start validation
  event.preventDefault();
  v.validate();
});


// Handle error-free validation
v.on('validation:success', () => {
  //alert('Nice! The form was validated without any errors');
  console.log('Nice! The form was validated without any errors');
  form.submit();
});

// Handle failed validation
v.on('validation:failed', () => {
  alert('Oops! There are some errors in the form.');
});