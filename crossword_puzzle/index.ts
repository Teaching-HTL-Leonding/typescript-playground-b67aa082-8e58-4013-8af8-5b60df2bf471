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
drawCells(start)
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
function drawCells(parts:number[]){
    for(let i = 0;i<parts.length;i++){
        const startx = width/4 -25+(parts[i]*50)
        noFill()
        stroke("black")
        rect(width/2-25+(parts[i]*50),50*i,50,50)
    }
}