function setup() {
    createCanvas(1000, 1000);
    background("white");
    noFill();

    stroke("blue");
    strokeWeight(3);
    circle(50,50,50);
    push();

    stroke("red")
    scale(2)
    strokeWeight(3/2)
    circle(50,50,50)

    pop()
    push();
    stroke("green");
    scale(4)
    strokeWeight(3/4)
    circle(50,50,50)
    pop()


   
}
