function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // Function CALL
  // +------------------------------ Function name
  // |  +--------------------------- Function parameter
  // v  v
  smile(true);


}

// Function DEFINITION
//       +-------------------------- Function name
//       |     +-------------------- Parameter name
//       |     |      +------------- Parameter type
//       v     v      v
function smile(happy: boolean) {
  let x = random(0,500)
  let y = random(0,500)
  if(happy === true){
    strokeWeight(2)
    fill("yellow")
    circle(x,y,100)
    noFill()
    arc(x, y, 70, 70, 0, 180);
    fill("black")
    circle(x-30,y-20,5)
    circle(x+30,y-20,5)
  }
  if(happy === false){
    strokeWeight(2)
    fill("green")
    circle(x,y,100)
    noFill()
    arc(x ,y+30 ,70 ,70 ,180 ,0)
    fill("black")
     circle(x-30,y-20,5)
    circle(x+30,y-20,5)

  }
}
let i = true
  function mouseClicked(){

    if(i=== true){
      i= false
    
    }
    else if(i === false){
      i = true
    }
    smile(i)
  }
