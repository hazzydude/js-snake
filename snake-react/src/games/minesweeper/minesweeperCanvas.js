import React, { Component } from 'react'

class snakeCanvas extends Component {
    constructor(props) {
        super(props)

        this.tileSize = 20; // 20 x 20 = 400
        
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")

        // render X times per second
        // const x = 4;
        // setInterval(() => this.draw(ctx), 1000 / x);
        this.draw(ctx)
    }

    draw(ctx) {
        this.paintBackground(ctx)
        //this.paintNaked Mines
        //this.PaintCovers
    }

    paintBackground(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.props.canvasSize, this.props.canvasSize);
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