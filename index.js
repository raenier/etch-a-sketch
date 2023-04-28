const container = document.querySelector('.sketch-board');
let boxeshtml = '';
for(let index = 0; index < 64 * 64; index++) {
  boxeshtml += " <div class='box'></div>";
}
container.innerHTML = boxeshtml;

const boxes = document.querySelectorAll('.box');
for(box of boxes) {
  box.addEventListener('mouseover', (e) => {
    e.target.style.background = 'black';
  });
}