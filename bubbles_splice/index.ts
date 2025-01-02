const circlesCenterX: number[] = [];
const circlesCenterY: number[] = [];
const circlesDiameter: number[] = [];
const circlesFill: string[] = [];
const lifetime = []
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

// setup runs once at the start
function setup() {
  createCanvas(400, 400);
}

// draw runs continuously in a loop
function draw() {
  background("black");

  if (millis() >= nextCircle) {
    const d = random(10, maxDiameter);  // Random diameter between 10 and maxDiameter
    circlesDiameter.push(d);
    circlesCenterX.push(random(d / 2, width - d / 2));
    circlesCenterY.push(random(d / 2, height - d / 2));
    circlesFill.push(random(availableColors));
    nextCircle = millis() + random(500, 2000);
    lifetime.push(millis() + random(500, 2000))
  }
  for (let i = lifetime.length - 1; i >= 0; i--) {
    if (millis() > lifetime[i]) {
      circlesCenterX.splice(i, 1)
      circlesCenterY.splice(i, 1)
      circlesDiameter.splice(i, 1)
      circlesFill.splice(i, 1)
      lifetime.splice(i, 1)
    }

  }

  noStroke();
  for (let i = 0; i < circlesDiameter.length; i++) {
    fill(circlesFill[i]);
    circle(circlesCenterX[i], circlesCenterY[i], circlesDiameter[i]);
  }
}
