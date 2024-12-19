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

    rect(-3,31.34,3,7.32)
    rect(0,25.84,5.5,18.23)
    rect(0,14.84,16.5,40.32)
    
    circle(11,70/2,1/8)
    line(50,0,50,70)
    circle(50,35,9.15*2)
    circle(50,35,1)
    rect(100,35-3.66,3,7.32)
    rect(100-5.5,35-3.66-5.5,5.5,-18.23)
    rect(100-16.5,14.84,16.5,40.32)
        arc(0, 0, 2, 2, 0, 90);
    arc(0, 70, 2, 2, 270, 360);
    arc(100, 0, 2, 2, 90, 180);
    arc(100, 70, 2, 2, 180, 270);
   

    // Draw a semi-transparent rectangle as a background for the player names and numbers
    // NEW: Note that the color value has EIGHT hex digits, not six.
    // The last two digits represent the alpha value (transparency).
    // The hex value d0 (208 in decimal) is 80% opaque.
    fill("#008000d0");
    noStroke();
    rect(10, 5, 80, 60);
    
    textAlign(RIGHT);
    textStyle(NORMAL);
    textSize(4)
    fill("orange")
    for( let i = 0; i < playerNumbers.length; i++ ){
       text(`${i+1} `, 30, 12 + i * 5)
    }
       fill("yellow")
    textAlign(LEFT);
    for(let i = 0; i< playerNumbers.length; i++){
      text(`${firstNames[i]} ${lastNames[i]}`, 33, 12 + i * 5);
    }
    pop();
}
