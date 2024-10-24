let cardImage: p5.Image;
let colour: string = ""
let rank : string = ""
const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload() {
  const colorIx = Math.floor(random(0, 4));
  const cardIx = Math.floor(random(1, 14));
  switch(colorIx){
    case 0: colour = "clubs";break;
    case 1: colour = "diamonds";break;
    case 2: colour = "hearts";break;
    default : colour = "spades";break;
  }
  switch(cardIx){
    case 1: rank ="A";break;
    case 2: rank ="2";break;
    case 3: rank ="3";break;
    case 4: rank ="4";break;
    case 5: rank ="5";break;
    case 6: rank = "6";break;
    case 7: rank = "7";break;
    case 8: rank = "8";break;
    case 9: rank = "9";break;
    case 10: rank = "10";break;
    case 11: rank ="J";break;
    case 12: rank ="Q";break;
    case 13: rank = "K";break;

  }

cardImage = loadImage(`${BASE_URL}/${colour}/${rank}.png`)

}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");
 
  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}
