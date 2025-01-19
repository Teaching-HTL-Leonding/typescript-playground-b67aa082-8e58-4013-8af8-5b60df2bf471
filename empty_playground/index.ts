
let squares: boolean[] = [false,false,false,false,false,false,false,false,false]
let randomnum = 0
let time = 0
let timer = 60
function setup() {
createCanvas(600,700)
randomnum = Math.round(random(1,10))
squares[randomnum] = true
}

function draw() {
    background("black")
    timer = (60000-millis())/1000
    fill("white")
    text(`${Math.round(timer)}`,width/2,75)
    translate(0,100)
    push()
    stroke("white")
    for(let i = 0; i<3;i++){
    line(0,i*200,width,i*200)
    line(i*200,0,i*200,width)}
    pop()
     






}
function mouseClicked(){


}