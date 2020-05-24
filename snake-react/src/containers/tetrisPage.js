import React, { Component } from 'react'
import TetrisCanvas from "../games/tetris/tetrisCanvas"
import './gamePage.scss'
class TetrisPage extends Component {
  render() {


    return (
      <div className="game-container">
        <div className="title-wrapper">
          <h1>Tetris</h1>
        </div>
        <br />
        <div className='canvas-container'>
          <TetrisCanvas canvasWidth={200} canvasHeight={400}/>
        </div>
      </div>
    );
  }
}

export default TetrisPage;
