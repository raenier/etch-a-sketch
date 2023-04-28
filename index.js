const container = document.querySelector('.sketch-board');
const reso_btn = document.querySelector('.reso_btn');

//Function for creating the boxes
function createBoxes(boxmultiplier, container) {
  let boxeshtml = '';
  for(let index = 0; index < boxmultiplier * boxmultiplier; index++) {
    boxeshtml += " <div class='box'></div>";
  }
  container.innerHTML = boxeshtml;
  
  const boxes = document.querySelectorAll('.box');
  for(box of boxes) {
    box.addEventListener('mouseover', (e) => {
      e.target.style.background = 'black';
    });
    box.style.flexBasis = `calc(100% / ${boxmultiplier})`;
    box.style.paddingBottom = `calc(100% / ${boxmultiplier})`;
  }
}

//Create initial boxes 100 by 100
createBoxes(100, container);

//Determine resolution/ get from user
reso_btn.addEventListener('click', (e) => {
  let boxmultiplier = prompt('Range of 1-100');
  createBoxes(boxmultiplier, container);
});