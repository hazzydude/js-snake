class Apple {
    constructor(gridsize){
        this.gridSize = gridsize;
        // this.x = Math.floor(Math.random() * this.gridSize)
        // this.y = Math.floor(Math.random() * this.gridSize)
        this.x = 14
        this.y = 17
        
    }
    randLoc(){
        this.x = Math.floor(Math.random() * this.gridSize)
        this.y = Math.floor(Math.random() * this.gridSize)
    }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }

}

class Snake {

    constructor() {
        this.defaultTailSize = 3;
        this.tailSize = this.defaultTailSize;
        this.snakeTrail = [];
        this.snakeX = 10;
        this.snakeY = 10;

    }


    getTailSize() {
        return this.tailSize;
    }
    tailSizeAddOne() {
        this.tailSize++;
    }

    getSnakeTrail() {
        return this.snakeTrail;
    }

    updateSnakeTrail() {
        this.snakeTrail.unshift([this.snakeX, this.snakeY])
        while (this.snakeTrail.length > this.tailSize) {
            this.snakeTrail.pop();
        }
    }

    getSnakeX() {
        return this.snakeX
    }

    getSnakeY() {
        return this.snakeY
    }
    moveSnake(xchange, ychange) {
        this.snakeX += xchange;
        this.snakeY += ychange;
    }
    describe() {
        console.log("snakes are long and slimy, dont touch them")
    }

}

window.onload = function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    document.addEventListener("keydown", keyDownEvent);
    // render X times per second
    var x = 8;
    // setInterval(draw(ctx), 1000 / x);
    // setInterval(function(){ alert("Hello"); }, 3000)
    setInterval(function () { draw(ctx) }, 1000);



    // draw(ctx)



};

// game world
const canvasSize = 400;
const tileSize = 20; // 20 x 20 = 400
var nextX = 0;
var nextY = 0;
//load snake
const snake = new Snake;
const apple = new Apple(tileSize)

function draw(ctx) {
    // move snake in next pos
    snake.moveSnake(nextX, nextY)
    checkCollision()
    snake.updateSnakeTrail()

    paintBackground(ctx)
    paintApple(ctx)
    paintSnake(ctx)

}
function checkCollision(){
    if (snake.getSnakeX()==apple.getX() && snake.getSnakeY()==apple.getY()){
        console.log("ate apple")
        snake.tailSizeAddOne()
        apple.randLoc()
    }

}
function paintApple(ctx){
    ctx.fillStyle = "red";
    ctx.fillRect(apple.getX() * tileSize, apple.getY() * tileSize, tileSize, tileSize);

}

function paintBackground(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasSize, canvasSize);
}

function paintSnake(ctx) {
    for (let i = 0; i < snake.snakeTrail.length; i++) {
        if (i === 0) {
            ctx.fillStyle = "darkgreen";
        } else {
            ctx.fillStyle = "green";
        }

        ctx.fillRect(
            snake.snakeTrail[i][0] * tileSize,
            snake.snakeTrail[i][1] * tileSize,
            tileSize,
            tileSize)
    }


}

function keyDownEvent(e) {
    console.log("keydown registered")
    switch (e.keyCode) {
        case 37:
            nextX = -1;
            nextY = 0;
            break;
        case 38:
            nextX = 0;
            nextY = -1;
            break;
        case 39:
            nextX = 1;
            nextY = 0;
            break;
        case 40:
            nextX = 0;
            nextY = 1;
            break;
    }
}