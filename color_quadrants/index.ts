function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();
    fill("orange")
rect(0,0,width/2,height/2)
fill("blue")
rect(0,height/2,width/2,height/2)
fill("green")
rect(width/2,0,width/2,height/2)
fill("red")
rect(width/2,height/2,width/2,height/2)
fill("black")
rect(width/2-width/4,height/2-height/10,width/2,height/5)
}

function mouseClicked() {
    let message: string 
    fill("black")
rect(width/2-width/4,height/2-height/10,width/2,height/5)
if(mouseX<width/2 && mouseY<height/2){
    message = "orange"
}
if(mouseX>width/2 && mouseY<height/2){
    message = "green"
}
if(mouseX<width/2 && mouseY>height/2){
    message = "blue"
}
if(mouseX>width/2 && mouseY>height/2){
    message="red"
}
textSize(21)
fill("white")
textAlign(CENTER);
    text(` ${message}`,width/2,height/2)

}

