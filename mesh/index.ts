const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
                   // This is also the distance between the rays.




function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
 
  let l = MARGIN;
  
  while (l <= SIZE - MARGIN) {
    stroke("green");
    let r = MARGIN;
    while (r <= SIZE - MARGIN) {
      line(MARGIN, l, width - MARGIN, r);
      r += MARGIN;
    }

    l += MARGIN;
    
  }
}

