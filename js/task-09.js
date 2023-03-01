const bodyEl = document.querySelector('body')
const btnEl = document.querySelector('.change-color')
const spanEl = document.querySelector('.color')
btnEl.addEventListener('click', () => {
    let color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    bodyEl.style.backgroundColor = color;
    spanEl.textContent = color
})
  