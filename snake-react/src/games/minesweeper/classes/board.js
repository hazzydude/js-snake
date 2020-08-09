class MineField {
    constructor(size, numbermines) {
        this.size = size || 10;
        this.numberMines = numbermines || 14;
        this.boardArr = new Array(this.size).fill(new Array(this.size).fill(0));
        this.exploded = false;
        this.generateMinePositions()
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                this.getSurroundingValues(x, y)
            }
        }
        console.log(this.boardArr)

    }
    generateMinePositions() {
        let mineCoords = []
        let i = 0;
        while (i < 30) {
            let newCoord = [Math.floor(Math.random() * this.size), Math.floor(Math.random() * this.size)]
            if (!mineCoords.includes(newCoord)) {

                i++;
                mineCoords.push(newCoord);
            }
        }
        mineCoords.forEach(element => {
            this.assignValue(element[0], element[1], 19)
        })
    }
    getSurroundingTilesCoordinates(x, y) {
        switch (x) {
            case 0:
                switch (y) {
                    case 0:
                        return [[x + 1, y], [x, y + 1], [x + 1, y + 1]]
                    case this.size - 1:
                        return [[x + 1, y], [x, y - 1], [x + 1, y - 1]]
                    default:
                        return [[x, y - 1], [x, y + 1], [x + 1, y - 1], [x + 1, y], [x + 1, y + 1]]
                }
            case this.size - 1:
                switch (y) {
                    case 0:
                        return [[x - 1, y], [x, y + 1], [x - 1, y + 1]]
                    case this.size - 1:
                        return [[x - 1, y], [x, y - 1], [x - 1, y - 1]]
                    default:
                        return [[x, y - 1], [x, y + 1], [x - 1, y - 1], [x - 1, y], [x - 1, y + 1]]
                }
            default:
                switch (y) {
                    case 0:
                        return [[x - 1, y], [x + 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]]
                    case this.size - 1:
                        return [[x - 1, y], [x + 1, y], [x - 1, y - 1], [x, y - 1], [x + 1, y - 1]]
                    default:
                        return [[x - 1, y - 1], [x, y - 1], [x + 1, y - 1], [x - 1, y], [x + 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]]
                }
        }
    }

    getSurroundingValues(x, y) {
        if (this.boardArr[x][y] !== 19) {
            let surroundingCoords = this.getSurroundingTilesCoordinates(x, y);
            let surroundingTiles = surroundingCoords.map(element => this.boardArr[element[0]][element[1]])



            this.assignValue(x, y, surroundingTiles.filter(number => number === 19).length + 10);
        }
    }

    revealSurroundingTiles(x, y) {
        let surroundingCoords = this.getSurroundingTilesCoordinates(x, y);
        let surroundingNonReveledCoords = surroundingCoords.filter(element => this.boardArr[element[0]][element[1]]>=10)
        surroundingNonReveledCoords.forEach(element => this.attemptRevealTile(element[0],element[1]))

    }
    revealedTileClicked(x,y){
        const currentvalue = this.boardArr[x][y];
        let surroundingCoords = this.getSurroundingTilesCoordinates(x, y);
        let numberSurroundingFlags = surroundingCoords.map(element => this.boardArr[element[0]][element[1]]).filter(number => number >=20).length;
        if (numberSurroundingFlags===currentvalue){
            this.revealSurroundingTiles(x, y)
        }
    }

    attemptRevealTile(x, y) {
        const currentvalue = this.boardArr[x][y];
        if (10 <= currentvalue && currentvalue < 20) {
            this.assignValue(x, y, currentvalue - 10);
            if (currentvalue - 10 === 0) {
                this.revealSurroundingTiles(x, y)
            }
            else if(currentvalue - 10 === 9){
                this.exploded = true;
                this.explodedTile = [x,y];
            }
        } 
        // else if (20 <= currentvalue) {
        //     this.assignValue(x, y, currentvalue - 20);
        //     if (currentvalue - 20 === 0) {
        //         this.revealSurroundingTiles(x, y)
        //     }
        // } 
        else if(0 < currentvalue && currentvalue<10){
            this.revealedTileClicked(x,y)
        }

    }
    toggleFlag(x, y) {
        const currentvalue = this.boardArr[x][y];
        if (10 <= currentvalue && currentvalue < 20) {
            this.assignValue(x, y, currentvalue + 10);
        } else if (20 <= currentvalue) {
            this.assignValue(x, y, currentvalue - 10);
        }
    }

    assignValue(x, y, v) {
        let tmpArr = this.boardArr[x].slice();
        tmpArr[y] = v;
        this.boardArr[x] = tmpArr;
    }

};
export default MineField;