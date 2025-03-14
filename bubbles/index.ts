const circlesCenterX = [];
const circlesCenterY = [];
const circlesDiameter = [];
const circlesFill = [];
let nextCircle = 0;
const maxDiameter = 150;
  const availableColors = [
    "pink",
    "yellow",
    "aqua",
    "lime",
    "red",
    "gold",
  ]
function setup() {
  createCanvas(400,400);
}

// draw runs continuously in a loop
function draw() {
  if(millis()>= nextCircle){
    const d = random(10,maxDiameter)
  circlesDiameter.push(d);

  circlesCenterX.push(random(d/2,width-d/2));
  circlesCenterY.push(random(d/2,height-d/2));
  circlesFill.push(random(availableColors));
  nextCircle = millis() + random(500,2000)
  }

  noStroke();
  for ( let i= 0; i < circlesDiameter.length; i++){
    fill(circlesFill[i])
    circle(circlesCenterX[i],circlesCenterY[i],circlesDiameter[i])
  }
}
