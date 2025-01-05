// Set the initial fill levels for the silos. The fill levels are separated by commas.
const INITIAL_FILL = "3,7,8,3,10,2"

const SILO_MAX = 10; // Maximum fill for each silo
const CRICITAL_FILL = 8; // Critical fill level for each silo

// Store the fill values for the silos. Will be a value between 0 and SILO_MAX.
const silos: number[] = [];

// Constants for the layout
const CANVAS_HEIGHT = 500;
const CANVAS_WIDTH = 480;

const SILO_WIDTH = 50; // Width of each silo
const SILO_GAP = 25; // Gap between silos
const SILO_HEIGHT = 320; // Height of each silo
const SILOS_TOP = CANVAS_HEIGHT / 2 - SILO_HEIGHT / 2; // Y-coordinate of the top of the silos

const BUTTON_SIZE = 20; // Size of the buttons ("add" and "remove")
const BUTTON_GAP = 15; // Gap between the bottom of the buttons and the top of the silos
const BUTTON_TOP = SILOS_TOP - BUTTON_GAP - BUTTON_SIZE; // Y-coordinate of the top of the buttons

const silos_x :number[] = []


function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

   let num = 0;
  for (let i = 0; i < INITIAL_FILL.length; i++) {
    if (INITIAL_FILL[i] === ",") {
      silos.push(num);
      num = 0;
    } else {
      num = num * 10 + parseInt(INITIAL_FILL[i].trim());
    }
  }

  silos.push(num)
  for(let i = 0; i<silos.length; i++){
    silos_x.push(SILO_GAP + i * (SILO_GAP + SILO_WIDTH))
  }

}


function draw() {
  background("black");

  for(let i = 0; i < silos.length;i++){
    push();
    translate(silos_x[i], SILOS_TOP)
     stroke("yellow");
    strokeWeight(3);
    line(0,0,0,SILO_HEIGHT)
    line(SILO_WIDTH,0,SILO_WIDTH,SILO_HEIGHT)
    line(0,SILO_HEIGHT,SILO_WIDTH,SILO_HEIGHT)
    pop();
    push();
    let ratio = (silos[i] / SILO_MAX) * SILO_HEIGHT;
    if (ratio > SILO_HEIGHT) {
      
    ratio = SILO_HEIGHT;}
    if(silos[i] >= CRICITAL_FILL){
      fill("red")
    }
    else{fill("lime")}
    translate(silos_x[i], SILOS_TOP); 
    noStroke()
    rect(0, SILO_HEIGHT - ratio, SILO_WIDTH, ratio); 
    pop();



    push();
    translate(silos_x[i],  SILOS_TOP + SILO_HEIGHT)
    noStroke();
    fill("yellow");
    textAlign(CENTER, TOP);
    textSize(20);
    text(silos[i], SILO_WIDTH / 2, 10);
    pop();
  
  push();
    translate(silos_x[i], BUTTON_TOP);
    fill("yellow");
    
    rect(0, 0, BUTTON_SIZE, BUTTON_SIZE);
    
    rect(BUTTON_SIZE + BUTTON_GAP, 0, BUTTON_SIZE, BUTTON_SIZE);
    pop();
  }


}

function mouseClicked() {
  // <<< Add your code here
}
