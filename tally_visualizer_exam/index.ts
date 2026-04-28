// Layout constants
const GROUPS_PER_ROW = 10;
const ROWS = 10;
const MARKS_PER_GROUP = 5;
const TOTAL = ROWS * GROUPS_PER_ROW * MARKS_PER_GROUP; // 500

const GROUP_W = 42;   // width of one tally group
const GROUP_H = 36;   // height of the vertical strokes
const COL_GAP = 10;   // gap between groups
const ROW_GAP = 16;   // gap between rows
const MARGIN = 16;
const TITLE_HEIGHT = 30;

const CELL_W = GROUP_W + COL_GAP;
const CELL_H = GROUP_H + ROW_GAP;

// Colors
const COLOR_FILLED = "steelblue";

// The random number to visualize (0–500)
let randomNumber: number;

// <<< Add your functions here

function setup(): void {
    const canvasW = GROUPS_PER_ROW * CELL_W + 2 * MARGIN;
    const canvasH = ROWS * CELL_H + TITLE_HEIGHT + MARGIN;
    createCanvas(canvasW, canvasH);

    randomNumber = Math.floor(Math.random() * (TOTAL + 1));

    background("white");
    // <<< Add your logic here
    for (let y = 0; y < ROWS; y++) {
        translate(0, CELL_H);
        push();
        for (let x = 0; x < GROUPS_PER_ROW; x++) {
            translate(CELL_W, 0);

            drawGroup(getAmountOfColored(x,y,randomNumber));        
            }

        pop();
    }
}
function drawGroup(numberOfColored:number){
    for(let i = 0; i<MARKS_PER_GROUP; i++){
        if(i+1>numberOfColored){
            return
        }
        line(i*7,0,i*7,20)
    }
}
function getAmountOfColored(x: number, y: number, randomNumber: number): number {
    const groupIndex = y * GROUPS_PER_ROW + x;
    const start = groupIndex * MARKS_PER_GROUP;
    const end = start + MARKS_PER_GROUP;

    if (randomNumber >= end) {
        return MARKS_PER_GROUP;
    } else if (randomNumber > start) {
        return randomNumber - start;
    } else {
        return 0;
    }
}