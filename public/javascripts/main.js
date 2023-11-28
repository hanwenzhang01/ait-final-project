import e from 'express';
import { Validator, enLang as en } from '../facile-validator/dist/index.mjs';

// Select the container element that contains the fields
const form = document.querySelector('form');

// Create an instance of Validator for the container element
const v = new Validator(form, {
  lang: en,
});

form.addEventListener('submit', () => {
  // Call validate method to start validation
  v.validate();
});


// Handle error-free validation
v.on('validation:success', () => {
  //alert('Nice! The form was validated without any errors');
  console.log('Nice! The form was validated without any errors');
});

// Handle failed validation
v.on('validation:failed', () => {
  e.preventDefault();
  alert('Oops! There are some errors in the form.');
});