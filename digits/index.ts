function setup() {
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
  text(num, width / 2, height - 20);
}
