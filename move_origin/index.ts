function setup() {
  const SIZE = 400;
  const CIRCLE_DIAMETER = 50;

  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(3);
  stroke("yellow");
  noFill();

  for (let i = 0; i <= SIZE; i += 50) {
    circle(0, 0, 50)
    translate(50, 50)
  }
}
