const textEl = document.querySelector('#text')
const inputEl = document.querySelector('#font-size-control')

inputEl.addEventListener("input", () => {
    const size = inputEl.value;
  
    textEl.style.fontSize = size + "px";
  });