
let squares: boolean[] = [false,false,false,false,false,false,false,false,false]
let randomnum = 0
let time = 0
let timer = 60
let hits = 0
let misses = 0
let accuracy = 0
let totalshots = 0
function setup() {
createCanvas(600,700)
randomnum = Math.floor(random(0,9))
squares[randomnum] = true
}

function draw() {
    background("black")
    timer = (60000-millis())/1000
    fill("white")
    text(`${Math.round(timer)}`,width/2,75)
    text(`accuracy:${Math.round(accuracy)}%`,50,75)
    text(`score:${hits}`,550,75)
    translate(0,100)
    push()
    stroke("white")
    for(let i = 0; i<3;i++){
    line(0,i*200,width,i*200)
    line(i*200,0,i*200,width)}
    pop()
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let index = row * 3 + col
      let x = col * 200
      let y = row * 200


      if (squares[index]) {
        fill("red") // Active square color
      } else {
        fill("black") // Inactive square color
      }
      rect(x, y, 200, 200)
    }
  }

}
function mouseClicked(){
    let col = Math.floor(mouseX/200)
    let row = Math.floor(mouseY/200)
    let index = row * 3 + col
    totalshots++


  if (index ===randomnum) {
    squares[randomnum] = false // Deactivate the old square
    randomnum = Math.floor(random(0, 9)) // Choose a new random square
    squares[randomnum] = true // Activate the new square
    hits++
  }
  else{misses++}
  accuracy = hits/totalshots * 100

}