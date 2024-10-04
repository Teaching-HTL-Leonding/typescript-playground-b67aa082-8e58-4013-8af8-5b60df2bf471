function setup() {
  createCanvas(300, 200);
}

const circleDiameter = 50;

let circleCenterX = 0;
let direction = 2;
let circleCenterY = 0;
let direction2 = 2;
function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, height / 2, circleDiameter);

  circleCenterX += direction;


  if (circleCenterX >= width || circleCenterX <= 0) {

    direction *= -1;
  }

  stroke("white")
  strokeWeight(3)
  fill("aqua")
  circle(width / 2, circleCenterY, circleDiameter)

  circleCenterY = circleCenterY + direction2
  if (circleCenterY >= height || circleCenterY <= 0) {
    direction2 *= -1;
  }
}

