
const words: string[] = [
    "apple", "brave", "charm", "doubt", "eager", "flame", "grape", "haste", "ideal", "jumbo",
    "knife", "latch", "mango", "noble", "ocean", "piano", "quilt", "ranch", "scale", "tiger",
    "umbra", "vivid", "waltz", "xenon", "youth", "zebra", "blaze", "chime", "draft", "event",
    "frost", "glide", "heart", "inbox", "jolly", "kneel", "lunar", "merit", "nudge", "orbit",
    "plume", "quirk", "relay", "spine", "throb", "udder", "vexed", "wreak", "xerox", "yield",
    "zesty", "amber", "blend", "creek", "dwell", "ember", "fable", "grasp", "honor", "input",
    "joust", "karma", "lever", "mirth", "novel", "olive", "perky", "quash", "rider", "shout",
    "thorn", "usher", "vowel", "wider", "xylol", "yacht", "zonal", "baker", "chalk", "dizzy",
    "elite", "focal", "giant", "haste", "inlet", "joint", "knack", "lyric", "macho", "nifty",
    "oxide", "punch", "quirk", "risky", "scorn", "tense", "udder", "vigor", "woven", "xenon"
];
let randomnum = 0
let wordtoguess:string = ""
let usedrows:number = 0;
const UNIT:number = 35;
let userinput: string[] = ["", "", "", "", "", ""];
const allowedkeys:string = "abcdefghijklmnopqrstuvwxyz";
let won:boolean = false;

function setup() {
    createCanvas(235, 250)
    background("black")
    drawOutlines();
    randomnum = Math.floor(random(0,words.length))
    wordtoguess = words[randomnum]
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
            if (userinput[i].length < 5 && allowedkeys.includes(key)) {


                userinput[i] += key;
                break; 
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
             
            }
            else if (wordtoguess.includes(userinput[i][j])) {
                fill("orange");
                
            }
            else {
                fill("black");
                
            }
            stroke("white")
            rect(UNIT*j,UNIT*i,UNIT,UNIT)
            fill("white")
            noStroke();
            text(userinput[i][j], 15 + UNIT * j, 15 + UNIT * i)
        }
    }
    pop();
}
function checkIfWon(userinput: string[]) {
    switch (true) {
        case (userinput[1] === ""): usedrows = 1; break;
        case (userinput[2] === ""): usedrows = 2; break;
        case (userinput[3] === ""): usedrows = 3; break;
        case (userinput[4] === ""): usedrows = 4; break;
        case (userinput[5] === ""): usedrows = 5; break;
        case (userinput[6] === ""): usedrows = 6; break;
    }
    for (let i = 0; i < userinput.length; i++) {
        if (userinput[i] === wordtoguess) {
            background("black")
            textSize(20)
            fill("green")
            won = true;
            noStroke();
            text(`you won with ${6 - usedrows} rows left`, 15, height / 2)
        }
    }
    if(userinput[5].length === 5&& won === false){
            background("black")
            textSize(20)
            fill("red")
            noStroke();
            text(`you lost the word to guess was ${wordtoguess}`, 15, height / 2,width)
    }
}