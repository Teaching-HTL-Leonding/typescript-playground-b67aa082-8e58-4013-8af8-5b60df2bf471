function setup() {
    createCanvas(360, 200);
    background("white")
    colorMode(HSB)
    noStroke();
}

function mouseMoved() {
    fill(mouseX, mouseY, 100)
    rect(0, 0, 360, 100)
}
function mouseClicked() {
    fill(mouseX, mouseY, 100)
    rect(0, 100, 360, 100)
}