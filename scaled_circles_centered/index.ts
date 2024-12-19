function setup() {

    const x = 200
    const y = 200
    createCanvas(400, 400);
    background("white");
    noFill();

    stroke("blue");
    strokeWeight(3);
    circle(x, y, 50);
    
    push();
    stroke("red");
    scale(2);
    strokeWeight(3 / 2);
    circle(x/2, y/2, 50);
    pop();
    
    push();
    stroke("green");
    scale(4.0);
    strokeWeight(3 / 4); 
    circle(x/4, y/4, 50);
    pop();
}
