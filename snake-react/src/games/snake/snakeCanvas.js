import React, { Component } from 'react'
import Snake from './classes/snake'
import Apple from './classes/apple'

class snakeCanvas extends Component {
    constructor(props) {
        super(props)
        
        this.tileSize = 20; // 20 x 20 = 400
        this.nextX = 0;
        this.nextY = 0;
        this.snake = new Snake()
        this.apple = new Apple(this.tileSize)
        this.keyDownEvent = this.keyDownEvent.bind(this)
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")

        document.addEventListener("keydown", this.keyDownEvent);
        // render X times per second
        const x = 4;
        setInterval(() => this.draw(ctx), 1000 / x);

    }

    draw(ctx) {
        // move snake in next pos
        this.snake.moveSnake(this.nextX, this.nextY)
        this.snake.updateSnakeTrail()
        this.checkCollision()
        this.paintBackground(ctx)
        this.paintApple(ctx)
        this.paintSnake(ctx)

    }

    paintBackground(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.props.canvasSize, this.props.canvasSize);
    }

    paintSnake(ctx) {
        for (let i = 0; i < this.snake.snakeTrail.length; i++) {
            if (i === 0) {
                ctx.fillStyle = "darkgreen";
            } else {
                ctx.fillStyle = "green";
            }

            ctx.fillRect(
                this.snake.snakeTrail[i][0] * this.tileSize,
                this.snake.snakeTrail[i][1] * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        }
    }
    paintApple(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(
            this.apple.getX() * this.tileSize,
            this.apple.getY() * this.tileSize,
            this.tileSize,
            this.tileSize
        )
    }

    checkCollision(){
        if (this.snake.getSnakeX()===this.apple.getX() && this.snake.getSnakeY()===this.apple.getY()){
            this.snake.tailSizeAddOne()
            this.apple.randLoc()
        }
    
    }

    keyDownEvent(e) {
        switch (e.keyCode) {
            case 37:
                this.nextX = -1;
                this.nextY = 0;
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
                <canvas style={{ borderStyle: 'solid' }} ref="canvas" width={this.props.canvasSize} height={this.props.canvasSize} />
            </div>
        )
    }
}

export default snakeCanvas