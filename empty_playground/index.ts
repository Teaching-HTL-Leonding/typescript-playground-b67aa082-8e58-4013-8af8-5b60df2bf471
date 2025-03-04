const circleDiameter = 50;

// Aktuelle Position der äußeren Kugel
let circleCenterX;
let circleCenterY;

// Bewegungsrichtung
let directionX = 2;
let directionY = 2;

function setup() {
    createCanvas(300, 300);
    circleCenterX = random(circleDiameter / 2, width - circleDiameter / 2);
    circleCenterY = random(circleDiameter / 2, height - circleDiameter / 2);
}

function draw() {
    background("black");
    
    // Zeichne die große zentrale Kugel
    fill("gold");
    noStroke();
    circle(width / 2, height / 2, width);
    
    // Zeichne die bewegliche äußere Kugel
    stroke("white");
    strokeWeight(3);
    fill("lime");
    circle(circleCenterX, circleCenterY, circleDiameter);
    
    // Bewegung
    circleCenterX += directionX;
    circleCenterY += directionY;
    
    // Prüfe Kollision mit der großen Kugel
    bounceOffInnerCircle();
}

function bounceOffInnerCircle() {
    let distX = circleCenterX - width / 2;
    let distY = circleCenterY - height / 2;
    let distance = sqrt(distX * distX + distY * distY);
    let bigCircleRadius = width / 2 - circleDiameter / 2;

    if (distance >= bigCircleRadius) {
        let angle = atan2(distY, distX);
        directionX = cos(angle) * -2;
        directionY = sin(angle) * -2;
    }
}
