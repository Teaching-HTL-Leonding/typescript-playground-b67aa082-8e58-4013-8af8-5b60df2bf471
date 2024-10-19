// We declare constants to avoid repeating "magic numbers". 
// These numbers are used for positioning text and icons on the canvas.
// Note that we use all-caps for constants that represent 
// configuration values to make them easy to recognize.
const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;

function setup() {
    createCanvas(500, 490);
    background("black")
    textSize(25)
    fill("yellow")
    text(`Human:`,30,50)
    textSize(60)
    text(`🪨`,60,145)
    text(`📃`,185,145)
    text(`✂️`,310,145)
}

function mouseMoved() {
    noFill()
    if(mouseX>50 && mouseX<150 && mouseY>75&& mouseY< 175){
    stroke("yellow")
  } 
     else {
        stroke("black");
    }
        rect(50,75,100,100)


   

        
    if(mouseX>175 && mouseX<275 && mouseY>75&& mouseY< 175){
stroke("yellow")
    }        
     else {
        stroke("black");
    }
                rect(175,75,100,100)
    if (mouseX>300&& mouseX<400&&mouseY>75&& mouseY< 175){
        stroke("yellow")
   }
         else {
        stroke("black");
    }
    rect(300,75,100,100)}