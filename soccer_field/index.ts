// It must be possible to scale the entire field by changing the value of the constant SCALE.
// E.g. a SCALE value of 2 will create a small image, while a SCALE value of 10 will create a large image.
const SCALE = 5;

// Margin around the field (i.e. distance from edge to the field)
const MARGIN = 4;

// Player numbers
const playerNumbers: number[] = [1, 17, 22, 23, 20, 6, 15, 5, 11, 7, 9];

// First names
const firstNames: string[] = [
  "Thibaut", "Lucas", "Antonio", "Ferland", "Fran",
  "Eduardo", "Federico", "Jude", "Rodrygo", "Vinícius", "Kylian"
];

// Last names
const lastNames: string[] = [
  "Courtois", "Vázquez", "Rüdiger", "Mendy", "García",
  "Camavinga", "Valverde", "Bellingham", "Goes", "Júnior", "Mbappé"
];

function setup() {
    createCanvas((100 + MARGIN * 2) * SCALE, (70 + MARGIN * 2) * SCALE);
    background("green");

    strokeWeight(0.5);
    stroke("white");
    noFill();
    angleMode(DEGREES);

    push();

    // Note that we scale everything by the constant SCALE. We use the size values
    // in meters as if they were pixels, and then scale them up by the SCALE factor.
    scale(SCALE);
    translate(MARGIN, MARGIN);

    // Field (100x70m)
    rect(0, 0, 100, 70);

    // <<< Add your code to draw the rest if the soccer field here

    // Draw a semi-transparent rectangle as a background for the player names and numbers
    // NEW: Note that the color value has EIGHT hex digits, not six.
    // The last two digits represent the alpha value (transparency).
    // The hex value d0 (208 in decimal) is 80% opaque.
    fill("#008000d0");
    noStroke();
    rect(10, 5, 80, 60);

    // <<< Add your code to draw the player numbers and names here

    pop();
}
