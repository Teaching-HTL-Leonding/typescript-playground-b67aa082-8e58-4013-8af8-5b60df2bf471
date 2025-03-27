let fighter: p5.Image;

const fighterImageWidth = 475;
const fighterImageHeight = 724;
const fighterDisplayHeight = 200;
const fighterDisplayWidth = fighterDisplayHeight * (fighterImageWidth / fighterImageHeight);
let fighterPositionX = 0;
let fighterPositionY = 0;
let dragging = false;
let circlex = 500 / 2;
let circley = 500 - 50;
let radiusBlack = 10;

function preload() {
  fighter = loadImage("https://cddataexchange.blob.core.windows.net/images/Spaceship.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("lightblue");
  movePlane(circlex, circley, mouseX, mouseY);

  push();
  imageMode(CENTER);
  translate(width / 2 + fighterPositionX, height / 2 + fighterPositionY);
  image(fighter, 0, 0, fighterDisplayWidth, fighterDisplayHeight);
  pop();

  fill("white");
  stroke("red");
  circle(500 / 2, 500 - 50, 100);

  fill("black");
  stroke("black");
  circle(circlex, circley, 20);
}

function mousePressed() {
  dragging = isInRadius(circlex, circley, mouseX, mouseY, radiusBlack);
}

function mouseDragged() {
  if (dragging) {
    let dx = mouseX - (width / 2);  
    let dy = mouseY - (height - 50); 
    let distance = Math.sqrt(dx * dx + dy * dy); 

    if (distance > 50) {  
      let scale = 50 / distance; 
      circlex = (width / 2) + dx * scale; 
      circley = (height - 50) + dy * scale; 
    } else {
      circlex = mouseX;
      circley = mouseY;
    }
  }
}

function mouseReleased() {
  dragging = false;
}

function isInRadius(x: number, y: number, xm: number, ym: number, radius: number): boolean {
  const dx = xm - x;
  const dy = ym - y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance <= radius;
}

function movePlane(x: number, y: number, xm: number, ym: number) {
  let dx = 0;
  let dy = 0;

  dx = x - width / 2;
  dy = y - (height - 50);

  fighterPositionX += dx / 5;
  fighterPositionY += dy / 5;

  if (fighterPositionX > 250) {
    fighterPositionX = 250;
  } else if (fighterPositionX < -250) {
    fighterPositionX = -250;
  }

  if (fighterPositionY > 250) {
    fighterPositionY = 250;
  } else if (fighterPositionY < -250) {
    fighterPositionY = -250;
  }
}

