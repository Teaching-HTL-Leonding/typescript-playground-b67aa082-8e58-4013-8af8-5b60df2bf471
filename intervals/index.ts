// <<< Add your game variables here
  let time = 60
let dragging = false;
const smallradius = 50;
const largeradius = 70;
let smallcirclex= 0
let smallcircley= 0
let largecirclex = 0
let largecircley = 0
let interval;
let interval2;
let score = 0;
function setup() {  
createCanvas(800, 600);
smallcirclex = findRandomXPos(smallradius);
smallcircley = findRandomYPos(smallradius);
largecirclex = findRandomXPos(largeradius);
largecircley = findRandomYPos(largeradius);

while(circleInCircle(smallcirclex,smallcircley,smallradius,largecirclex,largecircley,largeradius)){
smallcirclex = findRandomXPos(smallradius);
smallcircley = findRandomYPos(smallradius);
largecirclex = findRandomXPos(largeradius);
largecircley = findRandomYPos(largeradius);
}
interval = setInterval(endGame,60000)
interval2 = setInterval(countDown, 1000)

  // <<< Add setup logic here
}

function draw() {
  background("lightgray");
  fill("lightblue")

  circle(smallcirclex,smallcircley,smallradius * 2)
  noFill();
  circle(largecirclex,largecircley,largeradius* 2)
  fill("black")
  
  text(`score:${score}`,20,height-10)
  text(`time:${time}`,width-50,height-10)

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
  if(circleInCircle(smallcirclex,smallcircley,smallradius,largecirclex,largecircley,largeradius)){
    while(circleInCircle(smallcirclex,smallcircley,smallradius,largecirclex,largecircley,largeradius)){
  largecirclex = findRandomXPos(largeradius);
  largecircley = findRandomYPos(largeradius);
  }
    score++
}
}


function isInRadius(mx:number,my:number,x:number,y:number):boolean{
  const dx = mx - x  
  const dy = my - y
  const distance = Math.sqrt(dx*dx+dy*dy)
 
  return distance <  smallradius
}
function findRandomXPos(radius:number):number{
  const randomX = random(radius,width-radius)
  return randomX

}
function findRandomYPos(radius:number):number{
  const randomY = random(radius,height-radius)
  return randomY
}
function circleInCircle(x1:number,y1:number,r1:number,x2:number,y2:number,r2:number):boolean{
    const dx = x1 - x2
    const dy = y1 - y2
  const distance = Math.sqrt(dx*dx+dy*dy)
  return distance + r1 < r2
  
}
function endGame(){
 clearInterval(interval);
 noLoop();
 background("lightgray")
 text(`Game Over!\n Final Score: ${score}`,width/2,height/2)
}
function countDown(){
  time--
}