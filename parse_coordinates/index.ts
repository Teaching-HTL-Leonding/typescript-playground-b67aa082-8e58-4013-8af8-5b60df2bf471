// The following string represents coordinates (x,y) of circles
// that you have to draw. Each circle must have a radius of 40.
const circles :number []= [50,50,50,100,100,50,100,100];

function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();
    stroke("black");
    strokeWeight(3);

    circle(circles[0],circles[1],40)
    circle(circles[2],circles[3],40)
    circle(circles[4],circles[5],40)
    circle(circles[6],circles[7],40)
}
