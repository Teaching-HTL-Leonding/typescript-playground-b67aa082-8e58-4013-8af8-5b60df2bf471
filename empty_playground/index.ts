    const unitSize = 25
    let running = false;
    let score = 0
    let xvelocity = unitSize;
    let yvelocity = 0;
    let snake = [
        {x:unitSize*4, y:0},
        {x:unitSize*3, y:0},
        {x:unitSize*2, y:0},
        {x:unitSize*1, y:0},
        {x:unitSize*0, y:0}

    ]
    let randx = 0
    let randy = 0
    window.addEventListener("keydown",changeDirection)
function setup() {
    createCanvas(500,500)
    background("white")
    gameStart();
}



function gameStart(){
    running = true;
    createFood();
    nextTick();
};
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
            fill("black")
            textSize(20)
            text(score,width-50,50)
        },75)
    }
    else{
        displayGameOver()
    }
};
function clearBoard(){
    background("white")
    noFill();
    strokeWeight(3)
    rect(0,0,width,height)
};
function createFood(){
    randx = Math.floor(random(0,width)/unitSize)*unitSize
    randy = Math.floor(random(0,height)/unitSize)*unitSize

}
function moveSnake(){
    const head = {x: snake[0].x+xvelocity,
                  y: snake[0].y+yvelocity}
                  snake.unshift(head)
                  if(snake[0].x == randx && snake[0].y == randy){
                        score++
                        createFood();
                  }
                  else{
                    snake.pop();
                  }
};
function drawSnake(){
    fill("green")
    for(const snakepart of snake){
        rect(snakepart.x,snakepart.y,unitSize,unitSize)
    }
    
    
};
function drawFood(){
        fill("red")
    rect(randx,randy,unitSize)
}
function changeDirection(event){
    const keypressed = event.keyCode
    const LEFT = 65
    const RIGHT = 68
    const UP = 87
    const DOWN = 83
    const goingUP = (yvelocity == -unitSize)
    const goingDOWN = (yvelocity == unitSize)
    const goingRIGHT = (xvelocity == unitSize)
    const goingLEFT = (xvelocity == -unitSize)
    switch(true){
        case(keypressed == LEFT&&!goingRIGHT):
        xvelocity = -unitSize
        yvelocity = 0;
        break;
        case (keypressed == UP&&!goingDOWN):
        xvelocity= 0;
        yvelocity= -unitSize
        break;
                case (keypressed == RIGHT&&!goingLEFT):
        xvelocity= unitSize;
        yvelocity= 0
        break;
                case (keypressed == DOWN&&!goingUP):
        xvelocity= 0;
        yvelocity= unitSize
        break;
    }


   

};
function checkGameOver(){
    switch(true){
        case (snake[0].x < 0):
        running = false;
        break;
            case (snake[0].x >= width):
        running = false;
        break;
                case (snake[0].y < 0):
        running = false;
        break;
                case (snake[0].y >= height):
        running = false;
        break;
    }
    for(let i = 0; i<snake.length;i++){
        if(snake[i].x== snake[0].x&&snake[i].y== snake[0].y){
      
        }
    }
    };
function displayGameOver(){
    fill("black")
    textAlign(CENTER)
    textSize(20)
    text(`GAME OVER! You reached ${score} points`,width/2,height/2)
};


