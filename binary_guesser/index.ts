function setup() {
  createCanvas(800, 500)
  background("black")
  const num = Math.floor(random(0, 16));
  const lastDigit1 = num % 2;
  const numWithoutLastDigit = Math.floor(num / 2);
  const lastDigit2 = numWithoutLastDigit % 2;
  const numWithoutLastDigit1 = Math.floor(numWithoutLastDigit / 2);
  const lastDigit3 = numWithoutLastDigit1 % 2;
  const numWithoutLastDigit2 = Math.floor(numWithoutLastDigit1 / 2);
  const lastDigit4 = numWithoutLastDigit2 % 2;
  
 


  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  textSize(20)
  text(num, width / 2, height - 20);
  textSize(80)
  text(lastDigit1, width - width / 3 + width / 25 + width / 27, height - height / 4 * 3 + height / 7)
  text(lastDigit2, width / 3 * 2 - width / 12 + width / 27, height - height / 4 * 3 + height / 7)
  text(lastDigit3, width / 2 - width / 24 + width / 27, height - height / 4 * 3 + height / 7)
  text(lastDigit4, width / 2 - width / 6 + width / 27, height - height / 4 * 3 + height / 7)
 
  noFill();
  stroke("yellow")

 
  rect(width / 2 - width / 6, height - height / 4 * 3, width / 15, height / 4)
  rect(width / 2 - width / 24, height - height / 4 * 3, width / 15, height / 4)
  rect(width / 3 * 2 - width / 12, height - height / 4 * 3, width / 15, height / 4)
  rect(width - width / 3 + width / 25, height - height / 4 * 3, width / 15, height / 4)


}
function mouseClicked() {
  
}