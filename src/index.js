import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import getLink from './add-link.js'

getLink('//at.alicdn.com/t/font_1366289_c04d3nbkzzi.js')


const Cell = function (props) {
  return (
    <div className="cell" onClick={props.onClick}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={`#icon-${props.text}`}></use>
      </svg>
    </div>
  )
}

const Chessboard = function () {
  const [cells, setCells] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])
  const [n, setN] = useState(0)
  const [finished, setFinished] = useState(false)
  const [result, setResult] = useState(null)
  const [sente, setSente] = useState('x') //默认是x先手
  const tell = () => {
    for (let i = 0; i < 3; i++) {
      if (cells[i][0] !== null && cells[i][0] === cells[i][1] && cells[i][1] === cells[i][2]) {
        setFinished(true)
        setResult(cells[i][0] + ' win!')
        return
      }
    }
    for (let i = 0; i < 3; i++) {
      if (cells[0][i] !== null && cells[0][i] === cells[1][i] && cells[1][i] === cells[2][i]) {
        setFinished(true)
        setResult(cells[0][i] + ' win!')
        return
      }
    }
    if (
      cells[0][0] === cells[1][1] &&
      cells[1][1] === cells[2][2] &&
      cells[0][0] !== null
    ) {
      setFinished(true)
      setResult(cells[0][0] + ' win!')
      return
    }

    if (
      cells[0][2] === cells[1][1] &&
      cells[1][1] === cells[2][0] &&
      cells[0][2] !== null
    ) {
      setFinished(true)
      setResult(cells[0][2] + ' win!')
      return
    }
    if (n === 8) {
      setFinished(true)
      setResult('Draw!')
    }

  }
  const onClickCell = (row, col) => {
    if (cells[row][col]) {
      return
    }
    console.log(n)
    setN(n + 1)
    cells[row][col] = n % 2 === 0 ? 'x' : 'o'
    cells[row][col] === 'x' ? setSente('o') : setSente('x')
    setCells(cells)
    tell()
  }
  return (
    <div className="chessBoard">
      <div className="sente">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={`#icon-${sente}`}></use>
        </svg>
        下
      </div>
      {
        cells.map((items, row) =>
          <div className="row">
            {items.map((item, col) =>
              <div className="col">
                <Cell text={item} onClick={() => onClickCell(row, col)} />
              </div>
            )}
          </div>
        )
      }
      {
        finished &&
        <div className="gameOver">
          {result}
          <svg className="icon again" onClick={() => window.location.reload()} aria-hidden="true"><use xlinkHref="#icon-again"></use></svg>
        </div>
      }
    </div>
  )
}


ReactDOM.render(<div>
  <Chessboard />
</div>, document.getElementById('root'))