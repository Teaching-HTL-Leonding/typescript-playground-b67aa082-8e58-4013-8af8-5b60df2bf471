function setup() {
    const SIZE = 400;
    const CIRCLE_DIAMETER = 50;

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(3);
    stroke("yellow");
    noFill();

    let y = 0;
    while (y <= SIZE) {
        // Save the current origin (left-most position in the current row)
        push();

        let x = 0;
        while (x <= SIZE) {
            circle(0, 0, CIRCLE_DIAMETER);
            translate(CIRCLE_DIAMETER, 0); // Move origin to the right
            x += CIRCLE_DIAMETER;
        }

        // Restore the stored origin -> back to left-most position in the current row
        pop();

        // Move one row down
        translate(0, CIRCLE_DIAMETER);
        y += CIRCLE_DIAMETER;
    }
}
