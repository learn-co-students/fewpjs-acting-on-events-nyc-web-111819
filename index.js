// Your code here

let dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight(){
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)

  if (left > 0){
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

// describe('moveDodgerRight', () => {
//   beforeEach(() => {
//     dodger = document.getElementById('dodger')
//   })

//   it('moves the DODGER to the right', () => {
//     var left = dodger.style.left
//     left = parseInt(left)

//     moveDodgerRight()

//     var newPosition = dodger.style.left
//     newPosition = parseInt(newPosition)

//     expect(newPosition).to.be.above(left)
//   })
// })