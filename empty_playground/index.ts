function setup() {
    createCanvas(600, 400);
    background("black");
    angleMode(DEGREES);

    // Do not fill the following shapes
    noFill();

    // Set line color and thickness (=weight)
    stroke("white");
    strokeWeight(2);

    // draw a ellipse
    ellipse(300, 200, 200, 120);


}
function mouseMoved() {
    background("black")

    let mousex = mouseX - width / 2;

    let mousey = mouseY - height / 2;

    noFill();
    stroke("white");
    strokeWeight(2.5);
    ellipse(width / 2, height / 2, mousex * 2, mousey * 2) 
}