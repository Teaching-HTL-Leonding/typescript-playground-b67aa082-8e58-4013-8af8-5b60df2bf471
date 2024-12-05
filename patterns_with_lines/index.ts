function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
}

function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);

    noFill();
    stroke("aqua");
let height1 = 0
let height2 = 5
for(let x = 0; x<50;x++ ){
    for( let i = 0;i<601;i += 1){
    translate(10,0)}
        line(0,height1,10,height2)
        height1 +=10
        height2+=10
    }
}
