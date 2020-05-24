//for rotation points and kicking behavior
//https://tetris.fandom.com/wiki/TGM_Rotation
//rotation points
//https://github.com/JCVanDam/fillit
//for shape letters
//https://medium.com/@markmliu/the-tetris-proof-60a7a69a8e04
class Shape {
    constructor() {

        this.rotation = 0;
        this.shapeNo = Math.ceil(Math.random() * 7)
        this.shapeGenerator()
        this.centerCoords = [4,0];
    }
    rotate(){
        if(this.shapeNo!==1)
        if (this.rotation<3){
            this.rotation++
        } else {
            this.rotation=0
        }
    }

    shapeGenerator() {
        //all points are relative to rotation point
        switch (this.shapeNo) {
            case 1:
                //O
                this.color = 'yellow'
                this.tileArray = ([[0,0], [0,1], [1,0], [1,1]])
                break
            case 2:
                //|
                this.color = 'lightblue'
                this.tileArray = ([[0,0], [0,1], [0,2], [0,-1]])
                break
            case 3:
                //S
                this.color = 'green'
                this.tileArray = ([[0,0], [1,0], [0,-1], [1, 1]])
                break
            case 4:
                //Z
                this.color = 'red'
                this.tileArray = ([[0,0], [1,0] ,[0,1], [1, -1]])
                break
            case 5:
                //j
                this.color = 'orange'
                this.tileArray = ([[0,0], [0,-1], [0,1], [1,-1]])
                break
            case 6:
                //L
                this.color = 'darkblue'
                this.tileArray = ([[0,0], [0,-1], [0,1], [1,1]])
                break
            case 7:
                //T
                this.color = 'purple'
                this.tileArray = ([[0,0], [0,-1], [0,1], [1,0]])
                break

            console.log("Shape number not in range 0-7 : " + this.shapeNo)
        }
    }
    getRotationPosition(){

        switch(this.rotation){
            case 0:
                return this.tileArray
            case 1:
                return this.tileArray.map(element => [-element[1], element[0]])
            case 2: 
                return this.tileArray.map(element => [-element[0], -element[1]])
            case 3: 
                 return this.tileArray.map(element => [element[1], -element[0]])
        }

    }
    //rotate function
    //[1,0] => [0,1]
    //[0,1] => [-1,0]
    //[-1,0] => [0,-1]
    //[0,-1] => [1,0]
}

export default Shape