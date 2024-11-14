function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    // Draw vertical lines
    let i = GRID;
    let x = GRID;
    while (i < SIZE) {
        line(i, 0, i, SIZE);
        i += GRID;
    }

    // Draw horizontal lines
    i = GRID;
    while (i < SIZE) {
        line(0, i, SIZE, i);
        i += GRID;
    }

    strokeWeight(2);

    // Draw left part of the lines
    stroke("yellow");
    // <<< Write your code here

    // Draw right part of the lines
    stroke("red");
    let p = GRID
    x = GRID
    while (p < SIZE && x < SIZE) {
        stroke("red")
        line(x, p, SIZE - GRID, p)
        stroke("yellow")
        line(x, p, GRID, p)
        x += GRID
        p += GRID

    }


}

