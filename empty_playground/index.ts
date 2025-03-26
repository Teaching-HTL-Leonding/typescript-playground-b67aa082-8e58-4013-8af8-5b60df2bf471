function setup() {
    createCanvas(600, 400);
    background("black");
    angleMode(DEGREES);
}


// <<< Füge hier die Funktion `mouseMoved` mit dem erforderlichen Code hinzu
function mouseMoved() {
    let radiusX: number = (mouseX - width / 2);
    let radiusY: number = (mouseY - height / 2);
    let flaeche: number = (radiusX * radiusY * Math.PI);
    // ellipse 
    background("black");
    noFill();
    stroke("white");
    ellipse(width / 2, height / 2, (mouseX - width / 2) * 2, (mouseY - height / 2) * 2);
    text(`${flaeche}`, 10, 390);
    line(mouseX - width / 2, mouseX - width / 2, mouseY - height / 2, mouseY - height / 2);
}

