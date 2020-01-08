function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left < (400 - dodger.style.width)) {
    dodger.style.left = `${left + 1}px`;
  }
}



function keydownHandler() {
  switch (event.key) {
  case "ArrowLeft":
    moveDodgerLeft();
    break;
  
    case "ArrowRight": 
    moveDodgerRight();
    break;
    
  case "ArrowUp":
    // moveDodgerUp();
    console.log('Move Up!')
    break;
  
  case "ArrowDown":
    // moveDodgerDown();
    console.log('Move Down!')
    break;
    
  }
  
};

let dodger = document.getElementById("dodger");

document.addEventListener("keydown", keydownHandler)