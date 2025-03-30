const wordtoguess = "abcde"
let rows = 0
const UNIT = 35
let userinput: string[] = ["", "", "", "", "", ""]
const allowedkeys = "abcdefghijklmnopqrstuvwxyz"

function setup() {
    createCanvas(235, 250)
    background("black")
    drawOutlines();
}


function drawOutlines() {
    stroke("white")
    push();
    translate(UNIT, UNIT)
    for (let i = 0; i < 7; i++) {
        line(0, UNIT * i, width - UNIT * 2 + 10, UNIT * i)
    }
    for (let i = 0; i < 6; i++) {
        line(UNIT * i, 0, UNIT * i, width + 10 - UNIT)
    }
    pop();
}
function keyPressed() {
    background("black")

    for (let i = 0; i < userinput.length; i++) {
        for (let j = 0; j < userinput[i].length; j++)
            if (userinput[i].length < 5 && allowedkeys.includes(userinput[i][j])) {


                userinput[i] += key;
                break; // Sobald ein Zeichen eingefügt wurde, stoppen wir die Schleife
            }

    }
    drawOutlines();
    drawGuesses(userinput);
    checkIfWon(userinput)
}
function drawGuesses(userinput: string[]) {
    push();
    translate(UNIT, UNIT)
    for (let i = 0; i < userinput.length; i++) {
        for (let j = 0; j < userinput[i].length; j++) {
            if (wordtoguess[j] === userinput[i][j]) {
                fill("green");
                noStroke();
            }
            else if (wordtoguess.includes(userinput[i][j])) {
                fill("orange");
                noStroke();
            }
            else {
                fill("white");
                noStroke();
            }
            text(userinput[i][j], 15 + UNIT * j, 15 + UNIT * i)
        }
    }
    pop();
}
function checkIfWon(userinput: string[]) {
    switch (true) {
        case (userinput[1] === ""): rows = 1; break;
        case (userinput[2] === ""): rows = 2; break;
        case (userinput[3] === ""): rows = 3; break;
        case (userinput[4] === ""): rows = 4; break;
        case (userinput[5] === ""): rows = 5; break;
        case (userinput[6] === ""): rows = 6; break;
    }
    for (let i = 0; i < userinput.length; i++) {
        if (userinput[i] === wordtoguess) {
            background("black")
            textSize(20)
            fill("white")
            text(`you won with ${6 - rows} rows left`, 0, height / 2)
        }
    }
}