import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'




const Cell = function (props) {
  return (
    <div className="cell" onClick={props.onClick}>
      {props.text}
    </div>
  )
}

const Chessboard = function () {
  console.log('我多次执行了？')
  const [cells, setCells] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])
  console.log(useState(0))
  const [n, setN] = useState(0)
  const tell = () => {
    console.log('tell 判断谁赢了')
  }
  const onClickCell = (row, col) => {
    console.log('click')
    setN(n + 1)
    // setN(n + 1) //只能设置一次值
    console.log(setN(n + 1)) //undefined
    console.log(n) //0
    const copy = JSON.parse(JSON.stringify(cells))
    copy[row][col] = n % 2 === 0 ? 'x' : 'o'
    setCells(copy)
    tell()
    // setTimeout(() => {
    //   console.log(setN(n + 1))
    // }, 2000)
  }
  return (
    <div>
      <div>n:{n}</div>
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
    </div>
  )
}


ReactDOM.render(<div>
  <Chessboard />
</div>, document.getElementById('root'))