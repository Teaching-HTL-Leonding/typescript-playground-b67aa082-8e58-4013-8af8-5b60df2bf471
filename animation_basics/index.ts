const BASE_URL = "https://cddataexchange.blob.core.windows.net/images/NecromancerHalloween/Walking";
const IMAGE_SCALE = 0.2;
let images: p5.Image[] = []
function preload() {
    for (let i = 1; i < 10; i++) {
        images.push(loadImage(`${BASE_URL}/Necromancer_01__WALK_00${i}.png`))
    }
}
function setup() {
    createCanvas(images[0].width * IMAGE_SCALE, images[0].height * IMAGE_SCALE);
    frameRate(20);
}
let imageIndex = 0;
let x = -500
function draw() {
    background("lightgray");
    image(images[imageIndex], x, 0, images[0].width * IMAGE_SCALE, images[0].height * IMAGE_SCALE);
    imageIndex++;
    if (imageIndex === images.length) { imageIndex = 0; }
    x += 5;
    if (x > 500) { x = -500; }
}
