
const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 3000;
let circle_interval: number;
let level_interval: number;

let points = 0;

function setup() {
  createCanvas(300, 300);
  addRandomCircle()
  circle_interval = setInterval(addRandomCircle, waiting_time)

}

function draw() {
  background("black");
  for (let i = 0; i < circles_x.length; i++) {
    noFill()
    strokeWeight(2)
    stroke("white")
    circle(circles_x[i], circles_y[i], circles_diameter[i])
  }
  textSize(20)
  fill("white")
  noStroke()
  text(points, 10, 30)
  if (circles_x.length >= 10) {
    clearInterval(circle_interval)
    push()
    background("black")
    textSize(20)
    fill("lightgreen")
    textAlign(LEFT)
    text(`GAME OVER
    points:${points}`,width/3,height/2)
    pop()
    noLoop()
  }
}

function addRandomCircle() {
  circles_x.push(random(0, width))
  circles_y.push(random(0, height))
  circles_diameter.push(random(10, 50))
}

function mouseClicked() {
  for (let i = 0; i < circles_x.length; i++) {
    ;
    if (isInside(i)) {
      circles_x.splice(i, 1);
      circles_y.splice(i, 1);
      circles_diameter.splice(i, 1);
      points++
    }
  }
}


function isInside(circleindex: number): boolean {

  const distance = Math.sqrt((mouseX - circles_x[circleindex]) ** 2 + (mouseY - circles_y[circleindex]) ** 2)
  return distance <= circles_diameter[circleindex] / 2
}