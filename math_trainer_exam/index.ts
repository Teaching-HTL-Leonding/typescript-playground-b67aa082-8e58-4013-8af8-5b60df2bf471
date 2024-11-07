// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

// <<< TODO: Declare your GLOBAL variables here
let one = 0
let two = 0
let three = 0
let  position = 0
let operandnumber = 0
let operand = ""
let one1 = 0
let two1 = 0
let rightanswer = 0
function setup() {
    stroke("yellow")
    noFill()
    rect(width/2-75,height/2-75,75,75)
    one = Math.floor(random(1, 101))
    two = Math.floor(random(1, 101))
    three = Math.floor(random(1, 101))
    position = Math.floor(random(1, 4))
    operandnumber = Math.floor(random(1, 4))
    
    if (operandnumber === 1) {
        operand = "+"
    }
    else if (operandnumber === 2) {
        operand = "-"
    }
    else if (operandnumber === 3) {
        operand = "*"}
    if(operand ==="+"||operand === " -"){
        one1 = Math.floor(random(1, 101))
        two1 = Math.floor(random(1, 101))}
    else{ one1 = Math.floor(random(1, 11))
        two1 = Math.floor(random(1, 11))}
    if(operand ==="-"&&one1<two1){
        one1=two1;
        two1= Math.floor(random(0,one1))
    }

    if (operand === "+") {
        rightanswer = one1 + two1
    }
    else if (operand === "-") {
        rightanswer = one1 - two1
    }
    else if (operand === "*") {
        rightanswer = one1 * two1
    }
    createCanvas(400, 400);
    background("black");


    
    textSize(40)
    stroke("yellow")
    fill("yellow")
    if (position === 1) {
        text(`${rightanswer}`, width / 3-width/5, height / 2)
    }
    if (position === 2) {
        text(`${rightanswer}`, width/ 2-10, height / 2)
    }
    if (position === 3) {
        text(`${rightanswer}`, width / 3 * 2+width/8, height / 2)
    }
    if(position != 1 ){
        text(`${one}`, width / 3-width/5, height / 2)
    }
    if(position != 2){
            text(`${two}`, width/ 2 -width/40, height / 2)
    }
    if(position != 3){
        text(`${three}`, width /3*2+width/8, height / 2)
    }
    
    textSize(40)
    stroke("yellow")
    fill("yellow")
    text(`${operand}`, width / 2, height - height / 8 * 6)
    textAlign(RIGHT)
    text(`${one1}`, width / 3, height - height / 8 * 6)
    textAlign(LEFT)
    text(`${two1}`, width / 3 * 2, height - height / 8 * 6)
}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    fill("black")
    noStroke()
    rect(0,height/3*2,width,height)
    textSize(40)
    stroke("darkgreen")
    fill("darkgreen")
    textAlign(LEFT)
    if( position === 1 && mouseX > 0 && mouseX<width /3&& mouseY>height/2-height/10&&mouseY<height/2 ){
        text(`${rightanswer} ist richtig!`,width/8,height/8*7)
    }
    if( position === 2 && mouseX > width/3 && mouseX<width /3*2&& mouseY>height/2-height/10&&mouseY<height/2 ){
        text(`${rightanswer} ist richtig!`,width/8,height/8*7)
    }
    if( position === 3 && mouseX > width/3*2 && mouseX<width /3*3&& mouseY>height/2-height/10&&mouseY<height/2 ){
        text(`${rightanswer} ist richtig!`,width/8,height/8*7)}
         fill("red")
         stroke("red")
    if(position != 1&& mouseX> 0 && mouseX<width/3&& mouseY>height/2-height/10&&mouseY<height/2){
        text(`${one} ist falsch!`,width/8,height/8*7)
    }
 if( position != 2 && mouseX > width/3 && mouseX<width /3*2&& mouseY>height/2-height/10&&mouseY<height/2){
        text(`${two} ist falsch!`,width/8,height/8*7)}
 if( position != 3 && mouseX > width/3*2 && mouseX<width /3*3&& mouseY>height/2-height/10&&mouseY<height/2 ){
        text(`${three} ist falsch!`,width/8,height/8*7)}

}
// mouseMoved function displays mouse coordinates as feedback
function mouseMoved() {
    // This is a HELPER FUNCTION. It should make finding coordinates
    // easier for you. You DO NOT NEED to change this method!

    fill("black");
    noStroke();
    rect(0, height - 20, width, height); // Draws a rectangle to clear previous coordinates

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM); // Aligns coordinates text to bottom-left
    text(`${mouseX}/${mouseY}`, 5, height - 5); // Displays current mouse coordinates
}
