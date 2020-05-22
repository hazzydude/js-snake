export default class Snake {

    constructor(){
         this.defaultTailSize = 3;
         this.tailSize = this.defaultTailSize;
         this.snakeTrail = [];
         this.snakeX =  10;
         this.snakeY = 10;
    }
   

    getTailSize(){
        return this.tailSize;
    }
    tailSizeAddOne(){
        this.tailSize++;
    }

    getSnakeTrail(){
        return this.snakeTrail;
    }

    updateSnakeTrail(){

    }

    getSnakeX(){
        return this.snakeX
    }

    getSnakeY(){
        return this.snakeY
    }
    moveSnake(xchange,ychange){
        this.snakeX+=xchange;
        this.snakeY+=ychange;
    }

}
