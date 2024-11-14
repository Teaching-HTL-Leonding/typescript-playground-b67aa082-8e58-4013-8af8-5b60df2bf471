function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares
    let xyellow = GRID
    let yyellow = GRID
    let xgreen = SIZE-GRID*2
    let ygreen = GRID
    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();
    while(xyellow<SIZE-GRID&& yyellow <SIZE-GRID){
        fill("yellow")
        rect(xyellow,yyellow,GRID,GRID)
        xyellow+= GRID
        yyellow+= GRID
    }
    while(xgreen>=GRID&& ygreen< SIZE-GRID){
        fill("lime")
        rect(xgreen,ygreen,GRID,GRID)
        xgreen -= GRID
        ygreen += GRID
    }
    
}
