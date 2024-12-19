// The following string represents coordinates (x,y) of circles
// that you have to draw. Each circle must have a radius of 40.
const circles = "50,50 50,100 100,50 100,100";

function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();
    stroke("black");
    strokeWeight(3);
    let x = 0
    let y = 0
    let coords = ""
    for(let i = 0; i<circles.length;i++){
        switch(circles[i]){
            case ",":
            x = parseInt(coords)
            coords = ""
            break;
            case " ":
            y = parseInt(coords) 
            circle(x,y,40)
            coords = ""
            break;
            default:
            coords = coords + circles[i]

        }
    }
    y = parseInt(coords)
    circle(x,y,40)
}
