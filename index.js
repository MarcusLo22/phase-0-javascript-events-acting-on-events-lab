// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "0px";

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  });

  function moveDodgerLeft() {
    console.log(dodger.style.left);
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' && condition) {
      // Call moveDodgerRight() function here
      moveDodgerRight();
    }
  });

  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    console.log("rightNumbers:", rightNumbers);
    console.log("right:", right);
  
    if (right >= 0) {
      dodger.style.left = `${right + 1}px`;
    }
  }