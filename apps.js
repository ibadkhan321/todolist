const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerSet = 'abcdefghijklmnopqrstuvwxyz';
const numberSet = '0123456789';
const symbolSet = '!@#$%^&*()_+=[]{}|;:,.<>?';

lengthEl.addEventListener('input', () => {
  lengthValue.textContent = lengthEl.value;
});

generateBtn.addEventListener('click', () => {
  let chars = '';
  if (uppercaseEl.checked) chars += upperSet;
  if (lowercaseEl.checked) chars += lowerSet;
  if (numbersEl.checked) chars += numberSet;
  if (symbolsEl.checked) chars += symbolSet;

  let password = '';
  if (chars.length === 0) return alert('Select at least one option');

  for (let i = 0; i < +lengthEl.value; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordEl.value = password;
});

copyBtn.addEventListener('click', () => {
  passwordEl.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
});
