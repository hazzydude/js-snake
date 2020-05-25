class LockedTiles {
    constructor() {
        this.lockedTilesArr = [];
        this.initBoundies();
        console.log(this.wallsFloor)
    }
    initBoundies() {
        const xtiles = 10
        const ytiles = 20;
        this.wallsFloor = []
        for (let i = 0; i < ytiles; i++) {
            this.wallsFloor.push([-1, i], [xtiles, i])
        }
        for(let j=0;j<xtiles;j++){
            this.wallsFloor.push([j,ytiles])
        }
    }

    addLockedTiles(tilesArr) {
        this.lockedTilesArr = this.lockedTilesArr.concat(tilesArr)
    }

    get collisionTiles(){
        return this.wallsFloor.concat(this.lockedTilesArr)
    }


}

export default LockedTiles