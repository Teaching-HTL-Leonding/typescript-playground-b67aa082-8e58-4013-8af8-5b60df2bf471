let time: number = 60;
let dragging: boolean = false;
const smallradius: number = 50;
const largeradius: number = 70;
let smallcirclex: number = 0;
let smallcircley: number = 0;
let largecirclex: number = 0;
let largecircley: number = 0;
let interval: number;
let score: number = 0;
function setup() {
  createCanvas(800, 600);
  smallcirclex = findRandomXPos(smallradius);
  smallcircley = findRandomYPos(smallradius);
  largecirclex = findRandomXPos(largeradius);
  largecircley = findRandomYPos(largeradius);
  while (circleTouchesCircle(smallcirclex, smallcircley, smallradius, largecirclex, largecircley, largeradius)) {
    smallcirclex = findRandomXPos(smallradius);
    smallcircley = findRandomYPos(smallradius);
    largecirclex = findRandomXPos(largeradius);
    largecircley = findRandomYPos(largeradius);
  }
  interval = setInterval(countDown, 1000)
}
function draw() {
  if (time <= 0) {
    endGame();
    return
  }
  background("lightgray");
  fill("lightblue")
  circle(smallcirclex, smallcircley, smallradius * 2)
  noFill();
  circle(largecirclex, largecircley, largeradius * 2)
  fill("black")
  textSize(15)
  text(`score:${score}`, 20, height - 10)
  text(`time:${time}`, width - 50, height - 10)

}

function mousePressed() {
  dragging = isInRadius(mouseX, mouseY, smallcirclex, smallcircley)
}
function mouseDragged() {
  if (dragging) {
    smallcirclex = mouseX
    smallcircley = mouseY
  }
}
function mouseReleased() {
  dragging = false
  if (circleInCircle(smallcirclex, smallcircley, smallradius, largecirclex, largecircley, largeradius)) {
    while (circleTouchesCircle(smallcirclex, smallcircley, smallradius, largecirclex, largecircley, largeradius)) {
      largecirclex = findRandomXPos(largeradius);
      largecircley = findRandomYPos(largeradius);
    }
    score++
  }
}
function isInRadius(mx: number, my: number, x: number, y: number): boolean {
  return distance(mx, my, x, y) < smallradius
}
function findRandomXPos(radius: number): number {
  const randomX = random(radius, width - radius)
  return randomX
}
function findRandomYPos(radius: number): number {
  const randomY = random(radius, height - radius)
  return randomY
}
function circleInCircle(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): boolean {
  return distance(x1, y1, x2, y2) + r1 < r2
}
function circleTouchesCircle(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): boolean {
  return distance(x1, y1, x2, y2) < r1 + r2
}
function distance(x1: number, y1: number, x2: number, y2: number) {
  const dx = x1 - x2
  const dy = y1 - y2
  return Math.sqrt(dx * dx + dy * dy)
}
function endGame() {
  clearInterval(interval)
  noLoop();
  textSize(20)
  background("lightgray")
  textAlign(CENTER)
  text(`Game Over!\n Final Score: ${score}`, width / 2, height / 2)
}
function countDown() {
  time--
}