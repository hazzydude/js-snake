import React, { Component } from 'react'
import MineSweeperCanvas from "../games/minesweeper/minesweeperCanvas"
import './gamePage.scss'
class MineSweeperPage extends Component {


  render() {


    return (
      <div className="game-container">
        <div className="title-wrapper">
          <h1>mineSweeper</h1>
        </div>
        <br />
        <div className='canvas-container'>
          <MineSweeperCanvas canvasSize={400}/>
        </div>
      </div>
    );
  }
}

export default  MineSweeperPage;