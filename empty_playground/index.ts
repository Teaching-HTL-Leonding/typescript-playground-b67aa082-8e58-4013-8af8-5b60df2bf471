let squares: boolean[] = [false,false,false,false,false,false,false,false,false]
let randomnum = 0
let time = 0
let timer = 60
function setup() {
createCanvas(500,600)
randomnum = Math.round(random(1,10))
for(let i = 0; i < squares.length;i++){
    squares[i] = true
}
}

function draw() {
    background("black")
    // lines
    for( let i = 0;i< 4; i++) {
        
    }

    //timer 
    if(time === 1){
        timer = (60000-millis())/1000
    }
    fill("white")
    text(`${Math.round(timer)}`,width/2,100)
    if(timer <= 0){
        time = 2
    }




}
function mouseClicked(){

if(time === 0){
    time = 1
}
}
