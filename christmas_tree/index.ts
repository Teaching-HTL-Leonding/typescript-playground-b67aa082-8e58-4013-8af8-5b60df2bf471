const TOP_MARGIN = 80;
const SPHERE_DIAMETER = 30;
const WIDTH1 = 100;
const HEIGHT1 = WIDTH1*0.5
const WIDTH2 = WIDTH1*1.5
const HEIGHT2 = WIDTH2*0.5
const WIDTH3 = WIDTH2 * 1.5
const HEIGHT3 = WIDTH3 * 0.5
const WIDTH4 = WIDTH3 * 1.5
const HEIGHT4 = WIDTH4 * 0.5
const SIZE_INCREASE_BY_LAYER = 0.5;
const HEIGHT_TO_WIDTH_RATIO = 0.5;
const NUMBER_OF_LAYERS = 4;
const TRUNK_WIDTH = 50;
const TRUNK_HEIGHT = 50;

function setup() {
  createCanvas(500, 500);
  background("black");
  fill("green");
  noStroke();
triangle(width/2,TOP_MARGIN,width/2-WIDTH1/2,TOP_MARGIN+HEIGHT1,width/2+WIDTH1/2,TOP_MARGIN+HEIGHT1)
triangle(width/2,TOP_MARGIN+HEIGHT1/2,width/2-WIDTH2/2,TOP_MARGIN+HEIGHT2,width/2+WIDTH2/2,TOP_MARGIN+HEIGHT2)
}
