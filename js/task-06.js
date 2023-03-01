let inputEl = document.querySelector('#validation-input');

let inputLength = inputEl.dataset.length;

inputEl.addEventListener('change', e => {
  const text = e.target.value;
  console.log(text)
  if (text.length == inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});