function setup() {
    const SIZE = 400;
    const SIDE_LENGTH = 50;

    // We have an isosceles triangle ("gleichschenkeliges Dreieck").
    // This is the formula to calculate the height of such a triangle
    const HEIGHT = SIDE_LENGTH * Math.sqrt(3) / 2;

    createCanvas(SIZE, HEIGHT * 9);
    background("black");

    strokeWeight(1);
    stroke("yellow");
    noFill();

    translate(-SIDE_LENGTH / 2, -HEIGHT / 2)
    for(let x = 0; x<SIZE ;x += HEIGHT){
        push()
        for(let y = 0; y <SIZE+SIDE_LENGTH;y+=SIDE_LENGTH){
            triangle(0, HEIGHT, SIDE_LENGTH, HEIGHT, SIDE_LENGTH / 2, 0)
            translate(SIDE_LENGTH, 0)
        }
        pop();
        translate(0, HEIGHT)
    }





}

