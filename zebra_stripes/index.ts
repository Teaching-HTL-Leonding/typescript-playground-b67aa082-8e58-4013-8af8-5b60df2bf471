function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes
    let y = STRIPE_THICKNESS
    createCanvas(SIZE, SIZE);
    background("green");

   
    while(y<SIZE){
        noStroke()
        fill("yellow")
        rect(0,y,SIZE,STRIPE_THICKNESS)

        y += STRIPE_THICKNESS*2
    }
    
}
