const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 3000;
let circle_interval: number;
let level_interval: number;

let points = 0;

function setup() {
  createCanvas(300, 300);

addRandomCircle()

}

function draw() {
  background("black");

 for(let i = 0; i<circles_x.length; i++){
  addRandomCircle
 }
}

function addRandomCircle(){
    circles_x.push(random(0,width))
  circles_y.push(random(0,height))
  circles_diameter.push(random(10,50))
  circle(circles_x[circles_x.length],circles_y[circles_x.length],circles_diameter[circles_x.length])
}
