import React from 'react';
import './Board.css';

// https://alligator.io/react/typescript-with-react/
// https://teamtreehouse.com/community/react-docs-now-recommends-using-function-with-prevstate-inside-of-setstate

class Board extends React.Component {
  state = {
    playing: false,
    player1: false,
    cells: [0,0,0, 0,0,0, 0,0,0]
  };

  makeMove = (i: number) => {
    console.log(`move ${i}`);
    const newCells = this.state.cells.map((x,idx) => i === idx ? 1 : x );
    this.setState({cells: newCells});
  }

  render() {
    const value = ['_', 'O', 'X'];
    return (<div  className='box'>
        {this.state.cells.map((x, i) => 
          <div key={i} onClick={() => this.makeMove(i)}>{value[x]}</div>)}
      </div>);
  }
  
 };

export default Board;
