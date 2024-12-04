function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("black");
noStroke()
    let j = 0;
    let i = 0;
    while(i<SIZE){
        if(j%2 ==0){
            fill("lime")
        }
        else{
            fill("yellow")
        }
        rect(0,i,SIZE,STRIPE_THICKNESS)
        i += STRIPE_THICKNESS
        j++
    }
}
