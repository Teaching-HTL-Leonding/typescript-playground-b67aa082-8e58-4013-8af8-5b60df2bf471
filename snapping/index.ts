function setup() {
  createCanvas(300, 300);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  background("lightblue");

  let x: number = Math.round(mouseX / 40) * 40
  let y: number = Math.round(mouseY / 40) * 40
  noFill();
  text(`X: ${mouseX}, Y: ${mouseY}`, 5, height - 5);
  noStroke();
  fill("white");
  rect(x, y - 12, 5, 30)
  rect(x - 12, y, 30, 5)
  text(` ${x}/${y}`, 5, height - 5);
}

