function setup() {
    createCanvas(500, 500);
    background("black");
    textAlign(CENTER, CENTER);
    textSize(40);
    fill("yellow");
    noStroke();
}

function keyPressed() {
    background("black");

    if (key === 'a') {
        text("You pressed 'a'", width/2, height/2);
    }
}