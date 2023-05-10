const canvas = document.getElementById("gameCanvas"); 
const ctx = canvas.getContext("2d");

const image = new Image(); 
image.onload = drawImageActualSize; 
image.src = "bug.png"; 
const bugSize = 80; 


let score = 0; 
let hoppingInterval = 1000; 
let bugX = 0; 
let bugY = 0; 

function drawImageActualSize() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, bugX, bugY, bugSize, bugSize);
}

let scoreContent = document.createElement("div");
scoreContent.id = score;
scoreContent.innerHTML = `Score: ${score} `;
scoreContent.style.color = "navy";
document.getElementById("title").appendChild(scoreContent);


function moveBug() {
  bugX = Math.floor(Math.random() * (canvas.width - bugSize));
  bugY = Math.floor(Math.random() * (canvas.height - bugSize));

  drawImageActualSize();
}

canvas.addEventListener("click", function (e) {
  e.preventDefault(); 
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;

  if (
    mouseX >= bugX &&
    mouseX <= bugX + bugSize &&
    mouseY >= bugY &&
    mouseY <= bugY + bugSize
  ) {
    score++; 
    scoreContent.innerHTML = `Score: ${score} `; 
    if (hoppingInterval < 0) {
      
      hoppingInterval = 1000; 
    }
  }
});

const resetScore = () => {
  score = 0; 
  scoreContent.innerHTML = `Score: ${score} `; 
  hoppingInterval = 1000;
};

const resetSpeed = () => {
  hoppingInterval = 1000; 
}
setInterval(moveBug, hoppingInterval);