function setup() {
  createCanvas(1000,500)
  background("black")
  const num = Math.floor(random(0, 1_000_000));
  const lastDigit1 = num % 10;
  const numWithoutLastDigit = Math.floor(num / 10);
  const lastDigit2 = numWithoutLastDigit % 10;
  const numWithoutLastDigit1 = Math.floor(numWithoutLastDigit / 10);
  const lastDigit3 =numWithoutLastDigit1 % 10;
  const numWithoutLastDigit2 = Math.floor(numWithoutLastDigit1 / 10);
  const lastDigit4 = numWithoutLastDigit2 % 10;
  const numWithoutLastDigit3 = Math.floor( numWithoutLastDigit2/ 10);
  const lastDigit5 = numWithoutLastDigit3 % 10;
  const numWithoutLastDigit4 = Math.floor( numWithoutLastDigit3/ 10);
  const lastDigit6 = numWithoutLastDigit4 % 10;
  const numWithoutLastDigit5 = Math.floor( numWithoutLastDigit4/ 10);
  
  
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);
  text(lastDigit1, width-width/3+width/25, height-height/4*3)
  text(lastDigit2, width/3*2-width/12, height-height/4*3)
  text(lastDigit3,width/2-width/24 , height-height/4*3)
  text(lastDigit4, width/2-width/6 , height-height/4*3)
  text(lastDigit5, width/5 , height-height/4*3)
  text(lastDigit6, width/15, height-height/4*3)
  noFill();
  stroke("yellow")
  
  rect(width/15,height-height/4*3,width/15,height/4)
  rect(width/5,height-height/4*3,width/15,height/4)
  rect(width/2-width/6,height-height/4*3,width/15,height/4)
  rect(width/2-width/24,height-height/4*3,width/15,height/4)
  rect(width/3*2-width/12,height-height/4*3,width/15,height/4)
  rect(width-width/3+width/25,height-height/4*3,width/15,height/4)







}
