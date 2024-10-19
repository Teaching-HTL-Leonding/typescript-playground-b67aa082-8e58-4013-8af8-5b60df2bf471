
const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;
    
function setup() {
    createCanvas(500, 490);
    background("black");

    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);

    textSize(75);
    const HUMAN_SYMBOLS_TOP = 150;
    text("🪨", STONE_LEFT, HUMAN_SYMBOLS_TOP);
    text("📃", PAPER_LEFT, HUMAN_SYMBOLS_TOP);
    text("✂️", SCISSORS_LEFT, HUMAN_SYMBOLS_TOP);
    textSize(20)
}
    const isInVertical = mouseY >= ICON_TOP && mouseY < ICON_TOP + ICON_HEIGHT;

function mouseMoved() {
   
    noFill();
    strokeWeight(3);

    const isInVertical = mouseY >= ICON_TOP && mouseY < ICON_TOP + ICON_HEIGHT;
 

    if (isInVertical && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
        stroke("yellow");
    } else {
        stroke("black"); 
    }
    rect(STONE_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);

    if (isInVertical && mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH) {
        stroke("yellow");
    } else {
        stroke("black");
    }
    rect(PAPER_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);

    if (isInVertical && mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH) {
        stroke("yellow");
    } 
    else {
        stroke("black");
    }
    rect(SCISSORS_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
}
let userchoice:number = 0
let outcome = "eee"
function mouseClicked() {
    if (isInVertical && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH){
        userchoice = 1
    }
     if (isInVertical && mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH){
    userchoice= 2
    }
    if (isInVertical && mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH){
        userchoice = 3
    }
const computer = Math.floor(random(0,4))
    if(computer === userchoice){
        outcome = "It's a tie!"
    }
fill("yellow")
text(`${outcome}`,450,30)
}
