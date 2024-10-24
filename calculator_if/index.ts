const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout
let inpout : number = 0;
function setup() {
    createCanvas(300, 500);
    background("lightgray");
    textSize(50)
    textAlign(CENTER)
    text(`0`,width/3-12,height-20)
    text(`C`,width-75,height-20)
    text(`1`,width/3-60,height/5*4-20)
    text(`2`,width/3*2-60,height/5*4-20)
    text(`3`,width-60,height/5*4-20)
    text(`4`,width/3-60,height/5*3-20)
    text(`7`,width/3-60,height/5*2-20)
    text(`5`,width/3*2-60,height/5*3-20)
    text(`6`,width-60,height/5*3-20)
    text(`8`,width/3*2-60,height/5*2-20)
    text(`9`,width-60,height/5*2-20)
    strokeWeight(3)
    line(0,height/5,width,height/5)
    line(0,height/5*2,width,height/5*2)
    line(0,height/5*3,width,height/5*3)
    line(0,height/5*4,width,height/5*4)
    line(width/3,height/5*4,width/3,height/5)
    line(width/3*2,height,width/3*2,height/5)
}

function draw() {

noStroke()
fill("white")
rect(10,10,width-20,height/5-20)
fill("black")
text(`${inpout}`,width/2,height/5-width/10)
}

function mouseClicked() {
  if(mouseX>0&&mouseX<width/3*2&&mouseY>height/5*4&&mouseY<height){
    inpout = inpout*10 +0
  }
  if(mouseX>0&&mouseX<width/3&&mouseY>height/5*3&&mouseY<height/5*4){
    inpout = inpout*10 + 1
  }
  if(mouseX>0&&mouseX<width/3&&mouseY>height/5*2&&mouseY<height/5*3){
    inpout = inpout*10+4
  }
  if(mouseX>0&&mouseX<width/3&&mouseY>height/5&&mouseY<height/5*2){
    inpout = inpout*10+7
  }
  if(mouseX>width/3&&mouseX<width/3*2&&mouseY>height/5&&mouseY<height/5*2){
    inpout = inpout*10+8
  }
  if(mouseX>width/3&&mouseX<width/3*2&&mouseY>height/5*2&&mouseY<height/5*3){
    inpout = inpout*10+5
  }
  if(mouseX>width/3&&mouseX<width/3*2&&mouseY>height/5*3&&mouseY<height/5*4){
    inpout= inpout*10+2
  }
}