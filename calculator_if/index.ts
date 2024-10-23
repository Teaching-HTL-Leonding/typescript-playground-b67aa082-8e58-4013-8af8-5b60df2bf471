const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    textSize(50)
    createCanvas(300, 500);
    background("lightgray");
    text(`0`,width/3,height-20)
    strokeWeight(2)
    line(0,height/5,width,height/5)
    line(0,height/5*2,width,height/5*2)
    line(0,height/5*3,width,height/5*3)
    line(0,height/5*4,width,height/5*4)
    line(width/3,height/5*4,width/3,height/5)
    line(width/3*2,height,width/3*2,height/5)
}

function draw() {


}

function mouseClicked() {
  
}
