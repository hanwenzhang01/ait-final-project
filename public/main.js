import { Validator, enLang as en } from '@upjs/facile-validator';
console.log('in main.js')

  // Select the container element that contains the fields
  const form = document.querySelector('form');

  // Create an instance of Validator for the container element
  const v = new Validator(form, {
    lang: en,
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Call validate method to start validation
    console.log('before v.validate()')
    v.validate();
  });


  // Handle error-free validation
  v.on('validation:success', () => {
    console.log('in validation success');
    alert('Nice! The form was validated without any errors');
  });

  // Handle failed validation
  v.on('validation:failed', () => {
    console.log('in validation failure');
    alert('Oops! There are some errors in the form.');
  });