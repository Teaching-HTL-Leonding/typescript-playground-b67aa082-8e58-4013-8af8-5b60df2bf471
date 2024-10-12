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
  textSize(60)
  textAlign(CENTER, CENTER);
  if (lastDigit1 < 10) {
    text(lastDigit1, width / 2 + width / 8, height / 2 - 80, 100, 160)
  } if (lastDigit1 === 10) {
    text("A", width / 2 + width / 8, height / 2 - 80, 100, 160)
  } if (lastDigit1 === 11) {
    text("B", width / 2 + width / 8, height / 2 - 80, 100, 160)
  } if (lastDigit1 === 12) {
    text("C", width / 2 + width / 8, height / 2 - 80, 100, 160)
  } if (lastDigit1 === 13) {
    text("D", width / 2 + width / 8, height / 2 - 80, 100, 160)
  } if (lastDigit1 === 14) {
    text("E", width / 2 + width / 8, height / 2 - 80, 100, 160)
  } if (lastDigit1 === 15) {
    text("F", width / 2 + width / 8, height / 2 - 80, 100, 160)
  }

  if (lastDigit2 < 10) {
    text(lastDigit2, width / 2 , height / 2 )
  } if (lastDigit2 === 10) {
    text("A", width / 2 , height / 2 )
  } if (lastDigit2 === 11) {
    text("B", width / 2 , height / 2 )
  } if (lastDigit2 === 12) {
    text("C", width / 2 , height / 2 )
  } if (lastDigit2 === 13) {
    text("D", width / 2 , height / 2 )
  } if (lastDigit2 === 14) {
    text("E", width / 2 , height / 2 )
  } if (lastDigit2 === 15) {
    text("F", width / 2 , height / 2 )
  }

  if (lastDigit3 < 10) {
    text(lastDigit3, width / 2 - width / 4, height / 2 - 80, 100, 160)
  }
  if (lastDigit3 === 10) {
    text("A", width / 2 - width / 4, height / 2 - 80, 100, 160)
  }
  if (lastDigit3 === 11) {
    text("B", width / 2 - width / 4, height / 2 - 80, 100, 160)
  }
  if (lastDigit3 === 12) {
    text("C", width / 2 - width / 4, height / 2 - 80, 100, 160)
  }
  if (lastDigit3 === 13) {
    text("D", width / 2 - width / 4, height / 2 - 80, 100, 160)
  }
  if (lastDigit3 === 14) {
    text("E", width / 2 - width / 4, height / 2 - 80, 100, 160)
  }
  if (lastDigit3 === 15) {
    text("F", width / 2 - width / 4, height / 2 - 80, 100, 160)
  }

  noStroke();
  textSize(20)
  text(num, width / 2, height - 20);
  noFill();
  stroke("yellow")
  rect(width / 2 - width / 4, height / 2 - 80, 100, 160)
  rect(width / 2 - 50, height / 2 - 80, 100, 160)
  rect(width / 2 + width / 8, height / 2 - 80, 100, 160)
}