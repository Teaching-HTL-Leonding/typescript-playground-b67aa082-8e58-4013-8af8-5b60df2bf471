
const keys = ["W","A","S","D"]
function setup() {
    createCanvas(500, 500);
}

function draw() {
    background("black");
    textAlign(CENTER, CENTER);
    textSize(40);
    fill("yellow");
    noStroke();
for(let i = 0; i<keys.length;i++){
    if (keyIsDown(keys[i].charCodeAt(0))) {
        text(`${keys[i]}`, width/2, height/2);
    }
}}
