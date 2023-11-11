//Elements
const btnCheck = document.getElementById('check');
const message = document.querySelector('.message');
let input = document.getElementById('word');

//Functions
function checkWord() {
  let wordValue = document.getElementById('word').value;
  let word = wordValue.toLowerCase();
  let reverseWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }

  if (reverseWord == word) {
    document.getElementById('word').value = '';
    message.textContent = 'It is a Palindrome.';
    message.style.color = '#67dc82';
  } else {
    document.getElementById('word').value = '';
    message.textContent = 'It is not a Palindrome.';
    message.style.color = '#b92222';
  }
}

function writeNothing() {
  message.textContent = '';
}

//Event Listener
btnCheck.addEventListener('click', checkWord);

input.addEventListener('click', writeNothing);
