/**
* Animal Crossword Game
*
* This is a crossword puzzle game where players guess letters to reveal animal names.
* The game highlights a vertical solution word that is formed from a specific column.
* Players win when they've guessed all letters in the solution word.
*/

// Raw input data in format: animalName,startPosition,hint
let word: string[] = []
let start: number[] = []
let hint: string[] = []
let pressedkeys = ""
let wrongguesses = 0
const crossword = `krebs,0,Schalentier  
elefant,-1,Größtes Landtier  
schlange,-4,Lautloser Jäger  
papagei,-2,Bunter Sprachkünstler  
pinguin,0,Flugunfähiger Schwimmer  
esel,-2,Sturer Vierbeiner  
piranha,-2,Gefährlicher Schwarmfisch  
seestern,-3,Meerestier mit fünf Armen  
schildkröte,-1,Langsamer Panzerträger  
hund,0,Treuer Begleiter  
seelöwe,-3,Verspielter Meeressäuger  
aal,-1,Schlängelnder Stromleiter  
antilope,-1,Schneller Sprinter der Savanne  
regenwurm,-2,Bodenlockerer mit Ringeln  
seegurke,-2,Tarnkünstler der Tiefsee`;

// The word that players need to completely reveal to win
const solution = 'klapperschlange';

// === Write the necessary code starting here ===
function setup() {
    createCanvas(1000,1000)
    background("white")
    parseData(crossword)

}
function parseData(crossword: string): string[] {
    for (const row of crossword.split("\n")) {
        const parts = row.split(",")
        word.push(parts[0])
        start.push(parseInt(parts[1]))
        hint.push(parts[2])
    }
    return
}
function drawCells(parts: number[], words: string[]) {
    for (let j = 0; j < parts.length; j++) {
        const startx = width / 4 - 25 + (parts[j] * 50);
        
        for (let i = 0; i < words[j].length; i++) {
            if(startx + 50 * i=== 225)
            fill("yellow")
            else{
                noFill();}
            stroke("black");
            rect(startx + 50 * i, 50 * j, 50, 50);
        }
    }
}
function drawHints(hint: string[]){

    textAlign(LEFT)
    textSize(20)
    fill("black")
    noStroke();
    for(let i = 0; i<hint.length;i++){
        text(hint[i],width-200,35+50*i)
    }
}
function drawChars(parts:number[], words: string[]){
        for (let j = 0; j < parts.length; j++) {
        const startx = width / 4 - 25 + (parts[j] * 50);
        
        for (let i = 0; i < words[j].length; i++) {
            textSize(20)
            if(pressedkeys.includes(words[j][i])){

            text(words[j][i],startx + 50*i+20,50*j+30)
            }
        }
}}
function keyPressed(){

    let inputinarray = false
            for (let j = 0; j < word.length; j++) {
        
        for (let i = 0; i < word[j].length; i++) {
            textSize(20)
            if(key === word[j][i]){
                inputinarray = true
                if(pressedkeys.includes(word[j][i])=== false){
                pressedkeys += word[j][i]
                loop();
                return;
                }
            }
        }
}
if(!inputinarray){
    wrongguesses++
        loop();
}
}
function draw(){
        background("white")
drawCells(start,word)
drawHints(hint)
drawChars(start,word)
noLoop();
}
