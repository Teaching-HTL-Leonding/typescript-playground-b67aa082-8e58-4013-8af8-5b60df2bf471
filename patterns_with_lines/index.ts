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
    let l = Math.round(mouseX/601*100)
    
    background("black");
    strokeWeight(2);
    noStroke()
    fill("black")
    rect(0,285,width,16)
    fill("white")
    text(`${mouseX} of 601 = ${l}%`,47,296)
    colorMode(HSB)
    textSize(12)
    noFill();
    let height1 = 0
    let height2 = 5
    let color = 0
    for (let x = 0; x < 601; x++) {
    stroke(color,100,100);
        for (let i = 0; i < 29; i += 1) {
            line(0, height1, 10, height2)
            height1 += 10
            line(10,height2,0,height1)
            height2 += 10
        color = (color+0.2)%360
        }
        translate(10, 0)
        height1 = 0
        height2 = 5
    }

}