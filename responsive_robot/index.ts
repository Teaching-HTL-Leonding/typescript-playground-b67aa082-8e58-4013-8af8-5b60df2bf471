function setup() {
  createCanvas(500, 500);
  background("lightgray");

  const headWidth = width * 0.50;
  const headHeight = height * 0.50;
  const headX = width / 2 - headWidth / 2;
  const headY = height / 2 - headHeight / 2;
  const mouthWidth = headWidth * 0.50;
  const mouthHeight = headHeight * 0.1;
  const mouthX = width / 2 - headWidth * 0.25;
  const mouthY = height / 2 + headHeight * 0.20;
  const eyeX1 = width / 2 - headWidth * 0.25;
  const eyeY1 = height / 2 - headHeight * 0.25;
  const eyeX2 = width / 2 + headWidth * 0.25;
  const eyeY2 = height / 2 - headHeight * 0.25;
  const lineX1 = width / 2;
  const lineY1 = height / 2 - headHeight / 2;
  const lineX2 = width / 2;
  const lineY2 = height / 2 - headHeight * 0.75;
  const antenneX = width / 2;
  const antenneY = height / 2 - headHeight * 0.75;
  strokeWeight(2);
  fill("gray");
  rect(headX, headY, headWidth, headHeight);
  fill("white");
  rect(mouthX, mouthY, mouthWidth, mouthHeight);
  fill("black");
  circle(eyeX1, eyeY1, 40);
  circle(eyeX2, eyeY2, 40);
  line(lineX1, lineY1, lineX2, lineY2);
  fill("white");
  circle(antenneX, antenneY, 20);
}
