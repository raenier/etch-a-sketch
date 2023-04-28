const container = document.querySelector('.sketch-board');
const reso_btn = document.querySelector('.reso_btn');
const clr_btn = document.querySelector('.clr_btn');

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
      let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      e.target.style.background = randomColor;
    });
    box.style.flexBasis = `calc(100% / ${boxmultiplier})`;
    box.style.paddingBottom = `calc(100% / ${boxmultiplier})`;
  }
}

function getInput() {
  let userInput = prompt('Enter between 1-100', '100');
  //Recursion
  if(userInput > 100) {
    return getInput();
  }
  else {
    return userInput || 100;
  }
}

//Create initial boxes 100 by 100
createBoxes(100, container);

//Determine resolution/ get from user
reso_btn.addEventListener('click', (e) => {
  boxmultiplier = getInput();
  createBoxes(boxmultiplier, container);
});

clr_btn.addEventListener('click', (e) => {
  window.location.reload();
});