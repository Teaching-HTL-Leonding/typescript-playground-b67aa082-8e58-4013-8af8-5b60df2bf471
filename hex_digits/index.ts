function setup() {
  createCanvas(800, 500)
  background("black")
  const num = Math.floor(random(0, 4096));
  const lastDigit1 = num % 16;
  const numWithoutLastDigit = Math.floor(num / 16);
  const lastDigit2 = numWithoutLastDigit % 16;
  const numWithoutLastDigit1 = Math.floor(numWithoutLastDigit / 16);
  const lastDigit3 = numWithoutLastDigit1 % 16;
  fill("yellow");
  textSize(80)
  textAlign(CENTER, CENTER);
  if (lastDigit1 < 10) {
    text(lastDigit1, width - width / 3 + width / 25 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit1 === 10) {
    text("A", width - width / 3 + width / 25 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit1 === 11) {
    text("B", width - width / 3 + width / 25 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit1 === 12) {
    text("C", width - width / 3 + width / 25 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit1 === 13) {
    text("D", width - width / 3 + width / 25 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit1 === 14) {
    text("E", width - width / 3 + width / 25 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit1 === 15) {
    text("F", width - width / 3 + width / 25 + width / 27, height - height / 4 * 3 + height / 7)
  }

  if (lastDigit2 < 10) {
    text(lastDigit2, width / 3 * 2 - width / 12 + width / 27, height - height / 4 * 3 + height / 7)

  }
  if (lastDigit2 === 10) {
    text("A", width / 3 * 2 - width / 12 + width / 27, height - height / 4 * 3 + height / 7)

  }
  if (lastDigit2 === 11) {
    text("B", width / 3 * 2 - width / 12 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit2 === 12) {
    text("C", width / 3 * 2 - width / 12 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit2 === 13) {
    text("D", width / 3 * 2 - width / 12 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit2 === 14) {
    text("E", width / 3 * 2 - width / 12 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit2 === 15) {
    text("F", width / 3 * 2 - width / 12 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit3 < 10) {
    text(lastDigit3, width / 2 - width / 24 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit3 === 10) {
    text("A", width / 2 - width / 24 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit3 === 11) {
    text("B", width / 2 - width / 24 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit3 === 12) {
    text("C", width / 2 - width / 24 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit3 === 13) {
    text("D", width / 2 - width / 24 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit3 === 14) {
    text("E", width / 2 - width / 24 + width / 27, height - height / 4 * 3 + height / 7)
  }
  if (lastDigit3 === 15) {
    text("F", width / 2 - width / 24 + width / 27, height - height / 4 * 3 + height / 7)
  }



  noStroke();
  text(lastDigit3, width / 2 - width / 24 + width / 27, height - height / 4 * 3 + height / 7)

  textSize(20)
  text(num, width / 2, height - 20);

  noFill();
  stroke("yellow")


  rect(width / 2 - width / 24, height - height / 4 * 3, width / 15, height / 4)
  rect(width / 3 * 2 - width / 12, height - height / 4 * 3, width / 15, height / 4)
  rect(width - width / 3 + width / 25, height - height / 4 * 3, width / 15, height / 4)


}