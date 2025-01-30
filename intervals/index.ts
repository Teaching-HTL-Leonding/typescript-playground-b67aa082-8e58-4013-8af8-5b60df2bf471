let interval : number;
function setup() {
  createCanvas(300, 300);
  background("black");
  strokeWeight(2);
  stroke("lime");
  noFill();

 interval = setInterval(drawCircle, 1000)
}

function mouseClicked(){
  clearInterval(interval)
  console.log("Interval cleared")
}
function drawCircle(){
  const center_x = random(width)
  const center_y = random(height)
  const diameter = random(20,80)
  circle(center_x,center_y, diameter)
}