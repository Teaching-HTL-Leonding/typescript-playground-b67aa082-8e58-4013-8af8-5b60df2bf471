function setup() {
  createCanvas(300, 200);
}

const circleDiameter = 50;

let circleCenterX = 200;
let circleCenterY = 100;
let xdirection = 2;
let ydirection = 2;

function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, circleCenterY, circleDiameter);

  circleCenterX += xdirection;
  circleCenterY += ydirection;

  if (circleCenterX >= width || circleCenterX <= 0 ) {
    xdirection *= -1;
  }
  if( circleCenterY >=height || circleCenterY <= 0){
        ydirection *= -1;

  }
}
