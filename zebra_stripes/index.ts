function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes
    let y1= 0
    let y2=50
    createCanvas(SIZE, SIZE);
    background("green");

   
    while(y1<SIZE&& y2<SIZE){
        noStroke()
        fill("lime")
        rect(0,y1,SIZE,STRIPE_THICKNESS)
        fill("yellow")
        rect(0,y2,SIZE,STRIPE_THICKNESS)

        y1 += STRIPE_THICKNESS*2
        y2 += STRIPE_THICKNESS*2
    }
    
}
