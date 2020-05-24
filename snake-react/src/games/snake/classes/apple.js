export default class Apple {
    constructor(gridsize){
        this.gridSize = gridsize;
        // this.x = Math.floor(Math.random() * this.gridSize)
        // this.y = Math.floor(Math.random() * this.gridSize)
        this.randLoc();
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