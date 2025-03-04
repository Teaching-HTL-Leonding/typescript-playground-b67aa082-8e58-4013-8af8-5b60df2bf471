const circleDiameter = 50;

// Current center of the ball
let circleCenterX: number;
let circleCenterY: number;

// Current direction of the ball in X- and Y-direction
let directionX = 2;
let directionY = 2;

function setup() {
    createCanvas(300, 300);
    circleCenterX = random(0, width);
    circleCenterY = random(0, height);
}

function draw() {
    bounceOfCircle(directionX,directionY)
    background("black");
    fill("gold")
    circle(width/2,height/2,width)
    stroke("white");
    strokeWeight(3);
    fill("lime");
    circle(circleCenterX, circleCenterY, circleDiameter);

    circleCenterX += directionX;
    circleCenterY += directionY;

    if (circleCenterX <= circleDiameter/2 || circleCenterX >= width-circleDiameter/2) {
        directionX *= -1;
    }
    if (circleCenterY <= circleDiameter/2 || circleCenterY >= height-circleDiameter/2) {
        directionY *= -1;
    }
}
    function bounceOfCircle(x:number,y:number){
      push()
      translate(width/2,height/2)
      if(Math.sqrt(x**2+y**2)>= width||Math.sqrt(x**2+y**2)<= width){
        let num = random(1,2)
        if(num === 1){
          directionX *= -1
        }
        else if(num === 2){
          directionY*= -1
        }
      }
      pop()
    }