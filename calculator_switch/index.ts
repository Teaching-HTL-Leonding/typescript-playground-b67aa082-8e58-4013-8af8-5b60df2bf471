let inpout: number = 0;
function setup() {
    createCanvas(300, 500);
    background("lightgray");
    textSize(50)
    textAlign(CENTER)
    text(`0`, width / 3 - 12, height - 20)
    text(`C`, width - 75, height - 20)
    text(`1`, width / 3 - 60, height / 5 * 4 - 20)
    text(`2`, width / 3 * 2 - 60, height / 5 * 4 - 20)
    text(`3`, width - 60, height / 5 * 4 - 20)
    text(`4`, width / 3 - 60, height / 5 * 3 - 20)
    text(`7`, width / 3 - 60, height / 5 * 2 - 20)
    text(`5`, width / 3 * 2 - 60, height / 5 * 3 - 20)
    text(`6`, width - 60, height / 5 * 3 - 20)
    text(`8`, width / 3 * 2 - 60, height / 5 * 2 - 20)
    text(`9`, width - 60, height / 5 * 2 - 20)
    strokeWeight(3)
    line(0, height / 5, width, height / 5)
    line(0, height / 5 * 2, width, height / 5 * 2)
    line(0, height / 5 * 3, width, height / 5 * 3)
    line(0, height / 5 * 4, width, height / 5 * 4)
    line(width / 3, height / 5 * 4, width / 3, height / 5)
    line(width / 3 * 2, height, width / 3 * 2, height / 5)
}

function draw() {

    noStroke()
    fill("white")
    rect(10, 10, width - 20, height / 5 - 20)
    fill("black")
    textAlign(RIGHT, CENTER)
    text(`${inpout}`, width - 10, height / 5 / 2)
    fill("lightgrey")
    rect(0, 10, 10, height / 5 - 20)
}

function mouseClicked() {
let x = mouseX
let y = mouseY
    switch(x){
        case 1 : x< width/3 && x>0&&
    }
}
