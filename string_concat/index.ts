
let clickprotocol: string = "0/0"
function setup() {
  createCanvas(400, 400);
  background("lightblue"); 
  noStroke()
  fill("aqua")
 circle(0,0, 20)
}



function mouseClicked() {
   clickprotocol += `,${mouseX}/${mouseY}`;

  fill("lightblue");
  rect(0,0,400,400)
  noStroke()
  fill("aqua"); 
  circle(mouseX, mouseY, 20,); 
  fill("black")
text(`${clickprotocol}`, 0, 0, 300, 400); 
  

}

