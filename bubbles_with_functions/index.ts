
const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 30000;
let circle_interval: number;
let interval: number;

let points = 0;

function setup() {
  createCanvas(300, 300);
  addRandomCircle()
  interval = setInterval(addRandomCircle,waiting_time)

}

function draw() {
  background("black");
  isInside()
 for(let i = 0; i<circles_x.length; i++){

  circle(circles_x[i],circles_y[i],circles_diameter[i])
 }
}

function addRandomCircle(){
  circles_x.push(random(0,width))
  circles_y.push(random(0,height))
  circles_diameter.push(random(10,50))
}

function isInside(x: number, y: number, circle_index: number){
  for(let i = 0; i<circles_x.length;i++){
    push()
    translate(circles_x[i],circles_y[i])
    if(Math.sqrt(mouseX^2 +mouseY^2)<=circles_diameter[i])
    circles_diameter.splice[i]
    circles_x.splice[i]
    circles_y.splice[i]
    pop()
  }
}
