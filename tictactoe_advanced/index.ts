// Constants for the game grid
const GRID_SIZE = 300;           // The size of the Tic Tac Toe grid
const CELL_SIZE = GRID_SIZE / 3; // The size of each cell in the grid
const LINE_THICKNESS = 3;        // Thickness of the grid lines
let one = ""
let two = ""
let three = ""
let four = ""
let five = ""
let six = ""
let seven = ""
let eight = ""
let nine = ""
let currentplayer = "X"

// Canvas size
const CANVAS_WIDTH = GRID_SIZE; // Width of the canvas
const CANVAS_HEIGHT = GRID_SIZE + 50; // Height of the canvas (extra space for messages)

// <<< Add variables here

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}
function draw() {
    background("white")
    textSize(40)
    textAlign(CENTER)
    if (currentplayer === "X") {
        text(`Player X's turn`, width / 2, CANVAS_HEIGHT - 20)
    }
    else if (currentplayer === "O") { text(`Player O's turn`, width / 2, CANVAS_HEIGHT - 20) }
    else if (currentplayer === "x") { text(`Player X wins`, width / 2, CANVAS_HEIGHT - 20) }
    else if (currentplayer === "o") { text(`Player O wins`, width / 2, CANVAS_HEIGHT - 20) }
    else if (currentplayer === "t") { text(`It's a tie`, width / 2, CANVAS_HEIGHT - 20) }
    strokeWeight(LINE_THICKNESS)
    line(width / 3, GRID_SIZE, width / 3, 0)
    line(width / 3 * 2, GRID_SIZE, width / 3 * 2, 0)
    line(width, GRID_SIZE / 3, 0, GRID_SIZE / 3)
    line(width, GRID_SIZE / 3 * 2, 0, GRID_SIZE / 3 * 2)
    // <<< Add code here
    text(`${one}`, CELL_SIZE - CELL_SIZE / 1.5, CELL_SIZE * 1 - CELL_SIZE / 3)
    text(`${four}`, CELL_SIZE - CELL_SIZE / 1.5, CELL_SIZE * 2 - CELL_SIZE / 3)
    text(`${seven}`, CELL_SIZE - CELL_SIZE / 1.5, CELL_SIZE * 3 - CELL_SIZE / 3)
    text(`${two}`, CELL_SIZE * 2 - CELL_SIZE / 1.5, CELL_SIZE * 1 - CELL_SIZE / 3)
    text(`${five}`, CELL_SIZE * 2 - CELL_SIZE / 1.5, CELL_SIZE * 2 - CELL_SIZE / 3)
    text(`${eight}`, CELL_SIZE * 2 - CELL_SIZE / 1.5, CELL_SIZE * 3 - CELL_SIZE / 3)
    text(`${three}`, CELL_SIZE * 3 - CELL_SIZE / 1.5, CELL_SIZE * 1 - CELL_SIZE / 3)
    text(`${six}`, CELL_SIZE * 3 - CELL_SIZE / 1.5, CELL_SIZE * 2 - CELL_SIZE / 3)
    text(`${nine}`, CELL_SIZE * 3 - CELL_SIZE / 1.5, CELL_SIZE * 3 - CELL_SIZE / 3)
}

function mouseClicked() {
    textSize(40)
    //reset
    if (currentplayer === "x" || currentplayer === "o" || currentplayer === "t") {
        one = ""
        two = ""
        three = ""
        four = ""
        five = ""
        six = ""
        seven = ""
        eight = ""
        nine = ""
        currentplayer = "X"
    }
    if (mouseX > 0 && mouseX < CELL_SIZE && mouseY > 0 && mouseY < CELL_SIZE && one === "") {
        if (currentplayer === "X") {
            one = "X"
        }
        else { one = "O" }
    }
    if (mouseX > 0 && mouseX < CELL_SIZE && mouseY > CELL_SIZE * 1 && mouseY < CELL_SIZE * 2 && four === "") {
        if (currentplayer === "X") {
            four = "X"
        }
        else { four = "O" }
    }
    if (mouseX > 0 && mouseX < CELL_SIZE && mouseY > CELL_SIZE * 2 && mouseY < CELL_SIZE * 3 && seven === "") {
        if (currentplayer === "X") {
            seven = "X"
        }
        else { seven = "O" }
    }
    if (mouseX > CELL_SIZE * 1 && mouseX < CELL_SIZE * 2 && mouseY > 0 && mouseY < CELL_SIZE * 1 && two === "") {
        if (currentplayer === "X") {
            two = "X"
        }
        else { two = "O" }
    }
    if (mouseX > CELL_SIZE * 1 && mouseX < CELL_SIZE * 2 && mouseY > CELL_SIZE * 1 && mouseY < CELL_SIZE * 2 && five === "") {
        if (currentplayer === "X") {
            five = "X"
        }
        else { five = "O" }
    }
    if (mouseX > CELL_SIZE * 1 && mouseX < CELL_SIZE * 2 && mouseY > CELL_SIZE * 2 && mouseY < CELL_SIZE * 3 && eight === "") {
        if (currentplayer === "X") {
            eight = "X"
        }
        else { eight = "O" }
    }
    if (mouseX > CELL_SIZE * 2 && mouseX < CELL_SIZE * 3 && mouseY > 0 && mouseY < CELL_SIZE * 1 && three === "") {
        if (currentplayer === "X") {
            three = "X"
        }
        else { three = "O" }
    }
    if (mouseX > CELL_SIZE * 2 && mouseX < CELL_SIZE * 3 && mouseY > CELL_SIZE * 1 && mouseY < CELL_SIZE * 2 && six === "") {
        if (currentplayer === "X") {
            six = "X"
        }
        else { six = "O" }
    }
    if (mouseX > CELL_SIZE * 2 && mouseX < CELL_SIZE * 3 && mouseY > CELL_SIZE * 2 && mouseY < CELL_SIZE * 3 && nine === "") {
        if (currentplayer === "X") {
            nine = "X"
        }
        else { nine = "O" }
    }
    if (currentplayer === "X") {
        currentplayer = "O"
    }
    else { currentplayer = "X" }


    //gameresults:
    if (one === "X" && two === "X" && three === "X" ||
        four === "X" && five === "X" && six === "X" ||
        seven === "X" && eight === "X" && nine === "X" ||
        one === "X" && four === "X" && seven === "X" ||
        two === "X" && five === "X" && eight === "X" ||
        three === "X" && six === "X" && nine === "X" ||
        one === "X" && five === "X" && nine === "X" ||
        three === "X" && five === "X" && seven === "X") {
        currentplayer = "x"
    } else if (one === "O" && two === "O" && three === "O" ||
        four === "O" && five === "O" && six === "O" ||
        seven === "O" && eight === "O" && nine === "O" ||
        one === "O" && four === "O" && seven === "O" ||
        two === "O" && five === "O" && eight === "O" ||
        three === "O" && six === "O" && nine === "O" ||
        one === "O" && five === "O" && nine === "O" ||
        three === "O" && five === "O" && seven === "O"
    ) {
        currentplayer = "o"
    }
    if (one !== "" && two !== "" && three !== "" &&
        four !== "" && five !== "" && six !== "" &&
        seven !== "" && eight !== "" && nine !== "" &&
        !(
            (one === two && two === three) ||
            (four === five && five === six) ||
            (seven === eight && eight === nine) ||
            (one === four && four === seven) ||
            (two === five && five === eight) ||
            (three === six && six === nine) ||
            (one === five && five === nine) ||
            (three === five && five === seven)
        )
    ) { currentplayer = "t" }


}