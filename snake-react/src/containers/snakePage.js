import React, { Component } from 'react'
import SnakeCanvas from "../games/snake/snakeCanvas"
import './snakePage.scss'
class Page1 extends Component {


  render() {


    return (
      <div className="snake-container">
        <div className="title-wrapper">
          <h1>Snake</h1>
        </div>
        <br />
        <div className='canvas-container'>
          <SnakeCanvas canvasSize={400}/>
        </div>
      </div>
    );
  }
}

export default Page1;
