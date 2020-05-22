import React, { Component } from 'react'
import Snake from '../classes/snake'
import SnakeCanvasVarStore from '../classes/snakeCanvasVarStore'

class MyCanvas extends Component {
    constructor(props) {
        super(props)
        this.snake = new Snake()
        this.tileSize = 20; // 20 x 20 = 400
        this.nextX = 0;
        this.nextY = 0;
        
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")

        document.addEventListener("keydown", this.keyDownEvent);
        // render X times per second
        console.log(this.snake)
        const x = 8; // 1000 / x
        setInterval(() =>this.draw(ctx), 4000);

    }



    draw(ctx) {
        // move snake in next pos
        console.log(this.snake)
        this.snake.moveSnake(this.nextX, this.nextY)
        console.log(this.nextX, this.nextY)
        console.log(this.snake)

        this.paintSnake(ctx)

    }

    paintSnake(ctx) {
        ctx.fillRect(
            this.snake.getSnakeX() * this.tileSize,
            this.snake.getSnakeY() * this.tileSize,
            this.tileSize,
            this.tileSize)
    }

    keyDownEvent(e) {
        console.log("registered keydown event")
        console.log("should have a value: " + this.snake)
        switch (e.keyCode) {
            case 37:
                console.log("b, this.nextX: " + this.nextX)
                this.nextX = -1;
                this.nextY = 0;
                console.log("a, this.nextX: " + this.nextX)
                break;
            case 38:
                this.nextX = 0;
                this.nextY = -1;
                break;
            case 39:
                this.nextX = 1;
                this.nextY = 0;
                break;
            case 40:
                this.nextX = 0;
                this.nextY = 1;
                break;
        }
    }






    render() {
        return (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <canvas style={{ borderStyle: 'solid' }} ref="canvas" width={400} height={400} />
            </div>
        )
    }
}

export default MyCanvas