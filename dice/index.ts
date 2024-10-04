function setup() {
  const dicePointDiameter: number = 30;

  createCanvas(200, 200);
  background("black");


  const dice = Math.floor(random(1, 7));

  noStroke();
  fill("white");
  if (dice === 1) {
    circle(width / 2, height / 2, dicePointDiameter);
  }
  else if (dice === 2) {
    circle(width / 4, height / 4, dicePointDiameter);
    circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
  }
  else if (dice === 3) {
    circle(width / 4, height / 4, dicePointDiameter);
    circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
    circle(width / 2, height / 2, dicePointDiameter);
  }
  else if (dice === 4) {
    circle(width / 4, height / 4, dicePointDiameter);
    circle(width / 4, height / 4 * 3, dicePointDiameter);
    circle(width / 4 * 3, height / 4, dicePointDiameter);
    circle(width / 4 * 3, height / 4 * 3, dicePointDiameter);
  }
  else if (dice === 5) {
    circle(width / 4, height / 4, dicePointDiameter);
    circle(width / 4, height / 4 * 3, dicePointDiameter);
    circle(width / 4 * 3, height / 4, dicePointDiameter);
    circle(width / 4 * 3, height / 4 * 3, dicePointDiameter);
    circle(width / 2, height / 2, dicePointDiameter);
  }
  else if (dice === 6) {
    circle(width / 4, height / 6, dicePointDiameter)
    circle(width / 4, height / 6 * 3, dicePointDiameter)
    circle(width / 4, height / 6 * 5, dicePointDiameter)
    circle(width / 4 * 3, height / 6, dicePointDiameter)
    circle(width / 4 * 3, height / 6 * 3, dicePointDiameter)
    circle(width / 4 * 3, height / 6 * 5, dicePointDiameter)
  }
}
