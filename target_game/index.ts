// <<< Add your game variables here
let dragging = false;
const smallradius = 50;
const largeradius = 70;
let smallcirclex= 0
let smallcircley= 0
let largecirclex = 0
let largecircley = 0
function setup() {  
  createCanvas(800, 600);
smallcirclex = findRandomXPos(smallradius);
smallcircley = findRandomYPos(smallradius)
largecirclex = findRandomXPos(largeradius)
largecircley = findRandomYPos(largeradius)

  // <<< Add setup logic here
}

function draw() {
  background("lightgray");
  fill("lightblue")
  circle(smallcirclex,smallcircley,smallradius * 2)
  noFill();
  circle(largecirclex,largecircley,largeradius* 2)
}

function mousePressed() {
  dragging = isInRadius(mouseX,mouseY,smallcirclex,smallcircley)
}

function mouseDragged() {
  if(dragging){

    smallcirclex = mouseX
    smallcircley = mouseY

    
  }
  
  // <<< Add mouse dragged logic here
}

function mouseReleased() {
  dragging = false
}


function isInRadius(mx:number,my:number,x:number,y:number):boolean{
  const dx = mx - x  
  const dy = my - y
  const distance = Math.sqrt(dx*dx+dy*dy)
  return distance <smallradius
}
function findRandomXPos(radius:number){
  const randomX = random(radius,width-radius)
  return randomX

}
function findRandomYPos(radius:number){
  const randomY = random(radius,height-radius)
  return randomY
}
function circleInCircle(x1,y1,r1,x2,y2:number,r2:number)