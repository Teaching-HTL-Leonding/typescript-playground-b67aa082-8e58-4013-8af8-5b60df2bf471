function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}
function mouseMoved () {
    let rx = mouseX -width/2
    let ry = mouseY - height/2
    let rxround = Math.round(rx/20)*20
    let ryround = Math.round(ry/20)*20
     background("black");
     stroke("white")
     noFill()
    ellipse( width/2, height/2,rxround*2,ryround*2)
    let area = rxround * ryround * Math.PI
    text(`${Math.round(area)}`,10,height-10)
    line(width/2-rxround,height/2,width/2+rxround,height/2)

    line(width/2,height/2+ryround,width/2,height/2-ryround)
    text(`${rx}`,width/2-rx,height/2)
    text(`${ry}`,width/2,height/2-ry)

}