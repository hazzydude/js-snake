import React, { Component } from 'react'
import MineField from './classes/board'
import URL0 from './resources/0.png'
import URL1 from './resources/1.png'
import URL2 from './resources/2.png'
import URL3 from './resources/3.png'
import URL4 from './resources/4.png'
import URL5 from './resources/5.png'
import URL6 from './resources/6.png'
import URL7 from './resources/7.png'
import URL8 from './resources/8.png'
import URL9 from './resources/9.png'
import URL10 from './resources/10.png'
import URL11 from './resources/11.png'

class snakeCanvas extends Component {
    constructor(props) {
        super(props)

        this.tileSize = 40; //10x10 grid
        this.canvasSize = this.props.canvasSize

        this.img0 = new Image();
        this.img0.src = URL0;
        this.img1 = new Image();
        this.img1.src = URL1;
        this.img2 = new Image();
        this.img2.src = URL2;
        this.img3 = new Image();
        this.img3.src = URL3;
        this.img4 = new Image();
        this.img4.src = URL4;
        this.img5 = new Image();
        this.img5.src = URL5;
        this.img6 = new Image();
        this.img6.src = URL6;
        this.img7 = new Image();
        this.img7.src = URL7;
        this.img8 = new Image();
        this.img8.src = URL8;
        this.img9 = new Image();
        this.img9.src = URL9;
        this.img10 = new Image();
        this.img10.src = URL10;
        this.img11 = new Image();
        this.img11.src = URL11;

        this.clickEvent = this.clickEvent.bind(this)
        this.rightClickEvent = this.rightClickEvent.bind(this)
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        this.elemLeft = canvas.offsetLeft;
        this.elemTop = canvas.offsetTop;
        this.ctx = canvas.getContext("2d");
        this.MineField = new MineField()
        //left click
        canvas.addEventListener("click", (e) => this.clickEvent(e));
        //right click
        canvas.addEventListener('contextmenu', (e) => this.rightClickEvent(e), false);

        // function (e) { e.preventDefault(); this.rightClickEvent(e); return false; }, false);
        // render X times per second
        // const x = 4;
        // setInterval(() => this.draw(ctx), 1000 / x);
        this.draw();
    }
    drawLoseMessage() {
        let loseMessage = 'You lose'
        let height = 30
        let hPadding = 40
        let wPadding = 40
        this.ctx.font = height +"px Consolas"
        var metrics = this.ctx.measureText(loseMessage);
        console.log(metrics)
        this.ctx.fillStyle = "darkgrey";
        this.ctx.fillRect((this.props.canvasSize - (metrics.width + wPadding)) / 2, (this.props.canvasSize -(height*3/2 + hPadding))/2, metrics.width + wPadding, height + hPadding);
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(loseMessage, this.props.canvasSize / 2, this.props.canvasSize / 2);
    }

    draw() {
        this.paintBackground()
        this.paintNakedMines()
        //this.PaintCovers
    }

    paintBackground() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvasSize, this.canvasSize);
        console.log(this.canvasSize)
        console.log(this.tileSize)
        this.ctx.beginPath()
        for (let i = this.tileSize; i < this.canvasSize; i += this.tileSize) {
            this.ctx.moveTo(0, i)
            this.ctx.lineTo(this.canvasSize, i)
            this.ctx.moveTo(i, 0)
            this.ctx.lineTo(i, this.canvasSize)
        }
        this.ctx.strokeStyle = 'grey';
        this.ctx.lineWidth = 1;
        // the stroke will actually paint the current path 
        this.ctx.stroke();
    }

    paintNakedMines() {
        // for each thing in this this.MineField.boardArr;
        // get image according to number, 
        // drawimage according to position in array;
        this.MineField.boardArr.forEach((row, yindex) => {
            row.forEach((element, xindex) => {

                switch (element) {
                    case 0:
                        this.ctx.drawImage(this.img0, xindex * this.tileSize, yindex * this.tileSize, this.tileSize, this.tileSize);
                        break;
                    case 1:
                        this.ctx.drawImage(this.img1, xindex * this.tileSize, yindex * this.tileSize, this.tileSize, this.tileSize);
                        break;
                    case 2:
                        this.ctx.drawImage(this.img2, xindex * this.tileSize, yindex * this.tileSize, this.tileSize, this.tileSize);
                        break;
                    case 3:
                        this.ctx.drawImage(this.img3, xindex * this.tileSize, yindex * this.tileSize, this.tileSize, this.tileSize);
                        break;
                    case 4:
                        this.ctx.drawImage(this.img4, xindex * this.tileSize, yindex * this.tileSize, this.tileSize, this.tileSize);
                        break;
                    case 5:
                        this.ctx.drawImage(this.img5, xindex * this.tileSize, yindex * this.tileSize, this.tileSize, this.tileSize);
                        break;
                    case 6:
                        this.ctx.drawImage(this.img6, xindex * this.tileSize, yindex * this.tileSize, this.tileSize, this.tileSize);
                        break;
                    case 7:
                        this.ctx.drawImage(this.img7, xindex * this.tileSize, yindex * this.tileSize, this.tileSize, this.tileSize);
                        break;
                    case 8:
                        this.ctx.drawImage(this.img8, xindex * this.tileSize, yindex * this.tileSize, this.tileSize, this.tileSize);
                        break;
                    case 9:
                        this.ctx.drawImage(this.img9, xindex * this.tileSize, yindex * this.tileSize, this.tileSize, this.tileSize);
                        break;

                    default:
                        if (10 <= element && element < 20) {
                            this.ctx.drawImage(this.img10, xindex * this.tileSize, yindex * this.tileSize, this.tileSize, this.tileSize);
                        } else if (20 <= element) {
                            this.ctx.drawImage(this.img11, xindex * this.tileSize, yindex * this.tileSize, this.tileSize, this.tileSize);
                        }

                }
            })
        });
    }

    clickEvent(e) {
        var xVal = e.pageX - this.elemLeft;
        var yVal = e.pageY - this.elemTop;
        console.log('clicked ' + xVal + ' ' + yVal)
        if (0 <= xVal && xVal < this.canvasSize && 0 <= yVal && yVal < this.canvasSize) {
            let arrayEntry = Math.floor(xVal / this.tileSize)
            let arrayNumber = Math.floor(yVal / this.tileSize)
            this.MineField.attemptRevealTile(arrayNumber, arrayEntry)
            if(!this.MineField.exploded){
                this.draw()
            }
            else {
                this.draw()
                this.drawLoseMessage()
            }
            
        }
    }
    rightClickEvent(e) {
        e.preventDefault();
        var xVal = e.pageX - this.elemLeft;
        var yVal = e.pageY - this.elemTop;
        console.log(' right clicked ' + xVal + ' ' + yVal)
        if (0 <= xVal && xVal < this.canvasSize && 0 <= yVal && yVal < this.canvasSize) {
            let arrayEntry = Math.floor(xVal / this.tileSize)
            let arrayNumber = Math.floor(yVal / this.tileSize)
            this.MineField.toggleFlag(arrayNumber, arrayEntry)
            this.draw()
        }

        return false;
    }








    render() {
        return (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <canvas style={{ borderStyle: 'solid' }} ref="canvas" width={this.canvasSize} height={this.canvasSize} />
            </div>
        )
    }
}

export default snakeCanvas