import React, { Component } from 'react'
import Shape from './classes/shape'

class TetrisCanvas extends Component {

    constructor(props) {
        super(props)
        this.tilesize = 20;
        this.keyDownEvent = this.keyDownEvent.bind(this)
        this.currentshape = new Shape
    }


    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")

        document.addEventListener("keydown", this.keyDownEvent);
        // render X times per second
        const x = 8;
        setInterval(() => this.draw(ctx), 1000 / x);
        const speed = 1
        
        setInterval(() => this.moveShape(), 1000 / speed);
    }

    draw(ctx) {
        this.paintBackground(ctx)
        this.paintCurrentShape(ctx)
    }

    paintCurrentShape(ctx) {
        //get 0index coords
        //get array and color
        //fill individual boxes
        const xindex = this.currentshape.centerCoords[0]
        const yindex = this.currentshape.centerCoords[1]
        ctx.fillStyle = this.currentshape.color
        this.currentshape.getRotationPosition().forEach(element => {
            ctx.fillRect((xindex + element[0]) * this.tilesize+1, (yindex + element[1]) * this.tilesize+1, this.tilesize-2, this.tilesize-2);
        })

    }

    moveShape(){
        this.currentshape.centerCoords[1]++;
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


    keyDownEvent(e) {
        switch (e.keyCode) {
            case 37:
                //left
                this.currentshape.centerCoords[0]--;
                break;
            case 38:
                //up
                this.currentshape.rotate();
                break;
            case 39:
                this.currentshape.centerCoords[0]++;
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