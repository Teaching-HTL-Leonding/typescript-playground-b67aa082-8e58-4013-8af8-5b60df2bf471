const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
                  // This is also the distance between the rays.
let u = 0
function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lime");
while(u<3){
let i = 0
  while(i<3){
    line(MARGIN,i,SIZE-MARGIN,MARGIN)
    i+= MARGIN
  }}
}
