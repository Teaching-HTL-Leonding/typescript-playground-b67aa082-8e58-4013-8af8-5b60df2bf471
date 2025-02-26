const RAILROAD_WIDTH = 225;
const RAILROAD_HEIGHT = 160;

const WAGON_WIDTH = 160;
const WAGON_HEIGHT = 113;

let railroad: p5.Image;
let cart: p5.Image

const BASE_URL = "https://cddataexchange.blob.core.windows.net/images/trains";

function setup() {
    createCanvas(800, 550);
    railroad = loadImage(`${BASE_URL}/railroad-straight.png`);
    cart = loadImage(`${BASE_URL}/train-carriage-wood.png`)
}

function draw() {
    background("#f0f0f0");

    scale(0.5, 0.5);

    // Move the origin to the right, upper corner. This makes sense
    // because we must draw the images from right to left so that
    // objects that are further left are "on top" of objects on
    // the right.
    translate(850, -100);








    for (let k = 0; k < 3; k++) {
        // Draw five railroad segments
        for (let i = 0; i < 5; i++) {
            drawRailroad(i);
        }

        for (let i = 0; i < 6; i++) {
            drawCart(i)
        }
        translate(125, 100)
    }

    /** Draw a railroad segment */
    function drawRailroad(ix: number) {
        image(railroad, -RAILROAD_WIDTH * ix, RAILROAD_HEIGHT * ix, railroad.width, railroad.height);

    }

    function drawCart(ix: number) {
        image(cart, -WAGON_WIDTH * ix, WAGON_HEIGHT * ix, cart.width, cart.height)
    }
}

