let fighter: p5.Image;

const fighterImageWidth = 475;
const fighterImageHeight = 724;
const fighterDisplayHeight = 200;
const fighterDisplayWidth = fighterDisplayHeight * (fighterImageWidth / fighterImageHeight);
let fighterPositionX = 0;
let fighterPositionY = 0;
let pressedInCircle = false;
let circlex = 500/2
let circley = 500-50
function preload() {
  fighter = loadImage("https://cddataexchange.blob.core.windows.net/images/Spaceship.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("lightblue");

  push();
  imageMode(CENTER);
  translate(width / 2 + fighterPositionX, height / 2 + fighterPositionY);
  image(fighter, 0, 0, fighterDisplayWidth, fighterDisplayHeight);
  pop();
  fill("white")
  stroke("red")
  circle(500/2,500-50,100)
  fill("black")
  stroke("black")
  circle(circlex,circley,20)
}

function mousePressed() {
  pressedInCircle = distance(circlex,circley)
}

function mouseDragged() {
  if(pressedInCircle===true){
    circlex = mouseX
    circley = mouseY

  }
}

function mouseReleased() {
  pressedInCircle = false
}
function distance(x:number,y:number,xm: number,ym:number):boolean{
  const dx = mouseX -x;
  const dy = mouseY - y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance <= 10 ;
  }