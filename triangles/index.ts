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

   let x = 0;
   while(x<SIZE){
    push()
    let y = 0
    while(y<HEIGHT*9){triangle(0,SIDE_LENGTH,SIDE_LENGTH,SIDE_LENGTH,SIDE_LENGTH/2,0)
    translate(SIDE_LENGTH,0)
    y += SIDE_LENGTH}
    x += SIDE_LENGTH
    translate(0,HEIGHT)
   }
}
