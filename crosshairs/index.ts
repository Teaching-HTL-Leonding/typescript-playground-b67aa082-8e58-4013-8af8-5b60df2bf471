function setup() {
  createCanvas(500, 500);
}



function mouseMoved() {
  strokeWeight(2)
  background("lightblue");
  noFill();
  text(`X: ${mouseX}, Y: ${mouseY}`, 5, height - 5);
  circle(mouseX, mouseY, 50);
  circle(mouseX, mouseY, 25)
  fill("black");
  rect(mouseX, mouseY - 35, 2, 75)
  rect(mouseX - 36, mouseY, 75, 2)
}
