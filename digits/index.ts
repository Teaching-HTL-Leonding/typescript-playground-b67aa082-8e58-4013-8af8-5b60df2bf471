function setup() {
  createCanvas(1000,1000)
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
  // Add the necessary code here
  
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 4, height - 20);
  text(lastDigit1, width/4 + 100, height-20)
  text(lastDigit2, width/4 + 200, height-20)
  text(lastDigit3, width/4 + 300, height-20)
  text(lastDigit4, width/4 + 400, height-20)
  text(lastDigit5, width/4 + 500, height-20)
  text(lastDigit6, width/4 + 600, height-20)



}
