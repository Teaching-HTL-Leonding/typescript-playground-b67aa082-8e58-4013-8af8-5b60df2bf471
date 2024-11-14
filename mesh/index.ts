const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
                   // This is also the distance between the rays.

// Use the HSB color scheme for this exercise. Draw the first rays
// (from left-upper corner) with hue 0 (=red), the next rays with
// hue 60 (yellow), the next with 120 (green), etc. Use the following
// constant for incrementing the hue value from point to point.


function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  colorMode(HSB);

  let i = MARGIN;
  
  while (i <= SIZE - MARGIN) {
   
    let u = MARGIN;
    while (u <= SIZE - MARGIN) {
        stroke("green")
      line(MARGIN, i, width - MARGIN, u);
      u += MARGIN;
    }

    i += MARGIN;
   
  }
}