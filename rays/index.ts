const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
                   // This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}

function mouseMoved() {
  background("black");
  strokeWeight(2);
  let i = MARGIN
  while(i<SIZE){
    stroke("green")
    line(i,0,mouseX,mouseY)
    line(i,SIZE,mouseX,mouseY)
    stroke("yellow")
    
    i += MARGIN
  }
  // <<< Add your code here
}
