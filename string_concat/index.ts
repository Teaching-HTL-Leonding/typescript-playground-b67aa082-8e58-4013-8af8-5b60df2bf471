let clickProtocol = "0/0";

function setup() {
  createCanvas(400, 400);
  background("lightblue");
  noStroke();
  fill("aqua");
  circle(0,0, 20)
  
} 

function mouseClicked() {
fill("lightblue")
  rect(0,0, 400, 400)
  noStroke();
  fill("aqua");
  circle(mouseX, mouseY, 20);

  clickProtocol += `, ${mouseX}/${mouseY}`;

  fill("black");
  text(clickProtocol , 0, 0, 400, 400);
}
