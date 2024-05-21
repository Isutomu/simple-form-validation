import isValidZipcode from 'is-valid-zipcode';
import getPasswordStrength from 'ts-password-check';

export function email() {
  const emailInput = document.querySelector('#email-form').value;
  if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(emailInput)) {
    return 'Unsupported format!';
  }
  return false;
}

export function zipcode() {
  const zipcodeInput = document.querySelector('#zipcode-form').value;
  const countryInput = document.querySelector('#country-form').value;
  if (!isValidZipcode(zipcodeInput, countryInput)) {
    return `Zipcode format invalid for ${countryInput}!`;
  }
  return false;
}

export function password() {
  const passwordInput = document.querySelector('#password-form').value;
  const config = {
    lowercase: true,
    uppercase: true,
    digits: true,
    specialChars: true,
    minLength: 8,
  };
  const passwordStrength = getPasswordStrength(passwordInput, config);
  if (passwordStrength.strength === 'Weak') {
    return passwordStrength.messages;
  }
}
