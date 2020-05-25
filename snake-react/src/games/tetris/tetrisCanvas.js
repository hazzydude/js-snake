import React, { Component } from 'react'
import Shape from './classes/shape'
import LockedTiles from './classes/lockedTiles'

class TetrisCanvas extends Component {
    //no kicks

    constructor(props) {
        super(props)
        this.tilesize = 20;
        this.keyDownEvent = this.keyDownEvent.bind(this)
        this.currentshape = new Shape
        this.lockedTiles = new LockedTiles
    }


    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")

        document.addEventListener("keydown", this.keyDownEvent);
        // render X times per second
        const x = 8;
        setInterval(() => this.draw(ctx), 1000 / x);
        const speed = 1

        setInterval(() => this.attemptMove('down'), 1000 / speed);
    }

    draw(ctx) {
        this.paintBackground(ctx)
        this.paintCurrentShape(ctx)
        this.paintLockedTiles(ctx)
    }



    paintBackground(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.props.canvasWidth, this.props.canvasHeight);
        ctx.beginPath()
        for (let i = this.tilesize; i < this.props.canvasHeight; i += this.tilesize) {
            ctx.moveTo(0, i)
            ctx.lineTo(this.props.canvasWidth, i)
        }
        for (let i = this.tilesize; i < this.props.canvasWidth; i += this.tilesize) {
            ctx.moveTo(i, 0)
            ctx.lineTo(i, this.props.canvasHeight)
        }
        ctx.strokeStyle = 'grey';
        ctx.lineWidth = 1;
        // the stroke will actually paint the current path 
        ctx.stroke();
    }

    paintLockedTiles(ctx) {
        ctx.fillStyle = "lightgrey";
        this.lockedTiles.lockedTilesArr.forEach(element => {
            ctx.fillRect(element[0] * this.tilesize + 1, element[1] * this.tilesize + 1, this.tilesize - 2, this.tilesize - 2);
        })
    }

    paintCurrentShape(ctx) {
        const xindex = this.currentshape.centerCoords[0];
        const yindex = this.currentshape.centerCoords[1];
        ctx.fillStyle = this.currentshape.color;
        this.currentshape.getRotationPosition().forEach(element => {
            ctx.fillRect((xindex + element[0]) * this.tilesize + 1, (yindex + element[1]) * this.tilesize + 1, this.tilesize - 2, this.tilesize - 2);
        })
    }

    attemptMove(type) {
        let attemptedPostion;
        switch (type) {
            case 'down':
                attemptedPostion = this.currentshape.getRotationPosition().map(element =>
                    [
                        this.currentshape.centerCoords[0] + element[0],
                        this.currentshape.centerCoords[1] + element[1] + 1
                    ]);
                if (this.checkCollisions(attemptedPostion)) {
                    console.log('collision we should lock')
                    const finalPos = this.currentshape.getRotationPosition().map(element =>
                        [this.currentshape.centerCoords[0] + element[0],
                        this.currentshape.centerCoords[1] + element[1]]
                    )
                    this.lockedTiles.addLockedTiles(finalPos)
                    this.currentshape = new Shape

                } else {
                    this.currentshape.centerCoords[1]++;
                }
                break
            case 'right':
                attemptedPostion = this.currentshape.getRotationPosition().map(element =>
                    [
                        this.currentshape.centerCoords[0] + element[0] + 1,
                        this.currentshape.centerCoords[1] + element[1]
                    ]);
                if (this.checkCollisions(attemptedPostion)) {
                    console.log('collision nothing should change')
                } else {
                    this.currentshape.centerCoords[0]++;
                }
                break
            case 'left':
                attemptedPostion = this.currentshape.getRotationPosition().map(element =>
                    [
                        this.currentshape.centerCoords[0] + element[0] - 1,
                        this.currentshape.centerCoords[1] + element[1]
                    ]);
                if (this.checkCollisions(attemptedPostion)) {
                    console.log('collision nothing should change')
                } else {
                    this.currentshape.centerCoords[0]--;
                }
                break
            case 'rotate':
                attemptedPostion = this.currentshape.testRotation().map(element =>
                    [
                        this.currentshape.centerCoords[0] + element[0],
                        this.currentshape.centerCoords[1] + element[1]
                    ]);
                if (this.checkCollisions(attemptedPostion)) {
                    console.log('collision nothing should change')
                } else {
                    this.currentshape.rotate();
                }
                break
        }

    }

    checkCollisions(arr) {
        let ret = false
        arr.forEach(e => {
            this.lockedTiles.collisionTiles.forEach(element => {
                if (element[0] == e[0] && element[1] == e[1]) {
                    ret = true;
                }
            });
        })
        return ret
    }

    keyDownEvent(e) {
        switch (e.keyCode) {
            case 37:
                //left
                this.attemptMove('left')
                // this.currentshape.centerCoords[0]--;
                break;
            case 38:
                //up
                if (this.currentshape.shapeNo !== 1) {
                    this.attemptMove('rotate')
                }
                break;
            case 39:
                this.attemptMove('right')
                //right
                break;
            case 40:
                //down
                break;
        }
    }

    render() {
        return (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <canvas style={{ borderStyle: 'solid' }} ref="canvas" width={this.props.canvasWidth} height={this.props.canvasHeight} />
            </div>
        )
    }


}


export default TetrisCanvas;