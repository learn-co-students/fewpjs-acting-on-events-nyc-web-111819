// Your code here
let dodger = document.getElementById("dodger");
let leftNumbers = dodger.style.left.replace("px", "");
let left = parseInt(leftNumbers, 10);

function moveDodgerLeft() {
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
      }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  })