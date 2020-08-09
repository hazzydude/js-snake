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
        this.gameActive = false;
    }
    startGame() {
        // render X times per second
        const x = 4;
        setInterval(() => this.draw(), 1000 / x);
        this.gameActive = true;

    }

    componentDidMount() {
        const canvas = this.refs.canvas
        this.ctx = canvas.getContext("2d")

        document.addEventListener("keydown", this.keyDownEvent);
        this.drawStartScreen()
    }

    drawStartScreen(ctx) {
        this.ctx.font = "18px Consolas"
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText('Press Any Key To Start', this.props.canvasSize / 2, this.props.canvasSize / 2);
    }

    draw() {
        // move snake in next pos
        this.snake.moveSnake(this.nextX, this.nextY)
        this.snake.updateSnakeTrail()
        this.checkCollision()
        this.paintBackground()
        this.paintApple()
        this.paintSnake()

    }

    paintBackground() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.props.canvasSize, this.props.canvasSize);
    }

    paintSnake() {
        for (let i = 0; i < this.snake.snakeTrail.length; i++) {
            if (i === 0) {
                this.ctx.fillStyle = "darkgreen";
            } else {
                this.ctx.fillStyle = "green";
            }

            this.ctx.fillRect(
                this.snake.snakeTrail[i][0] * this.tileSize,
                this.snake.snakeTrail[i][1] * this.tileSize,
                this.tileSize,
                this.tileSize
            )
        }
    }

    paintApple() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(
            this.apple.getX() * this.tileSize,
            this.apple.getY() * this.tileSize,
            this.tileSize,
            this.tileSize
        )
    }

    checkCollision() {
        if (this.snake.getSnakeX() === this.apple.getX() && this.snake.getSnakeY() === this.apple.getY()) {
            this.snake.tailSizeAddOne()
            this.apple.randLoc()
        }

    }

    keyDownEvent(e) {
        if (!this.gameActive) {
            this.startGame();
        }
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
            default:
                console.log("Key pressed with code: " + e.keycode)
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