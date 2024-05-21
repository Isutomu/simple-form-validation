import './style/reset.css';
import './style/common.css';

import * as checkError from './check-error.js';

function showError(inputNode, errorMsg) {
  const errorNotif = inputNode.closest('div').querySelector('span');
  errorNotif.textContent = errorMsg;
  errorNotif.classList = 'error active';
}

const inputFieldsToVerify = ['email', 'zipcode', 'password'];
inputFieldsToVerify.forEach((field) => {
  document.querySelector(`#${field}-form`).addEventListener('input', (e) => {
    const errorResult = checkError[field]();
    if (errorResult) {
      showError(e.target, errorResult);
      e.target.classList.add('invalid');
    } else {
      const errorNotif = e.target.closest('div').querySelector('span');
      errorNotif.textContent = '';
      errorNotif.classList = 'error';
      e.target.classList.remove('invalid');
    }
  });
});

document.querySelector('.submit-btn-form').addEventListener('click', () => {
  const activerError = document.querySelector('.invalid');
  if (activerError) {
    alert('Please verify the inputs!');
  } else {
    alert('Lets go!');
  }
});
