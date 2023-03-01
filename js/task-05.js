let inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);

let outputEl = document.querySelector('#name-output');
outputEl.textContent = "Anonymous";
function onInputChange(event) {
  inputEl = event.currentTarget.value;
  console.log(inputEl);
  console.log(event);

  outputEl.innerText = inputEl;
  
  if (inputEl === '') {
    outputEl.textContent = "Anonymous"; 
  }
}