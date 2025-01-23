const AVG_TEMP_LINZ: number[] = [
  -0.7, 0.5, 4.7, 9.9, 14.2, 17.9, 19.5, 19.3, 14.7, 10, 4.8, 0.6,
];

const AVG_TEMP_JOHANNESBURG: number[] = [
  20, 20, 18, 15, 12, 9, 9, 12, 16, 18, 18, 19,
];

function setup() {
  createCanvas(460, 300);

  // <<< Call the functions in the following order:
  // 1. Draw temperatures (gets AVG_TEMP_LINZ or AVG_TEMP_JOHANNESBURG as parameter)
  // 2. Draw axes
  // 3. Draw Y labels
  // 4. Draw X labels
  drawAxes()
  drawYLabels()
  drawXLabels()
}

function drawAxes() {
  strokeWeight(3)
line(50,10,50,210)
line(50,185,410,185)
}

function drawYLabels() {
  let x = 35
for(let i = 0; i<9; i++){
  
  push()
  translate(50,10)
  line(-5,i*25,5,i*25)
  textAlign(RIGHT)
  text(`${x}`,-10,i*25+4)
  x -= 5
  pop()
}
}

function drawXLabels() {
 for(let i = 0; i<13; i++){
  push()
translate(50,185)
line(30*i,-5,30*i,5)
  pop()

 }
}

function drawTemperatures(temperatures: number[]) {
  for(let i = 0; i<1; i++){
  push()
  translate(50,185)
  
  pop()
  }
}
