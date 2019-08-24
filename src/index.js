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
    console.log('tell')
    console.log(cells)
    for (let i = 0; i < 3; i++) {
      if (cells[i][0] !== null && cells[i][0] === cells[i][1] && cells[i][1] === cells[i][2]) {
        console.log(cells[i][0] + '赢了')
        setFinished(true)
        setResult(cells[i][0])
        return
      }
    }
    for (let i = 0; i < 3; i++) {
      if (cells[0][i] !== null && cells[0][i] === cells[1][i] && cells[1][i] === cells[2][i]) {
        console.log(cells[0][i] + '赢了')
        setFinished(true)
        setResult(cells[0][i])
        return
      }
    }
    if (
      cells[0][0] === cells[1][1] &&
      cells[1][1] === cells[2][2] &&
      cells[0][0] !== null
    ) {
      setFinished(true)
      setResult(cells[0][0])
      return
    }

    if (
      cells[0][2] === cells[1][1] &&
      cells[1][1] === cells[2][0] &&
      cells[0][2] !== null
    ) {
      setFinished(true)
      setResult(cells[0][2])
      return
    }

  }
  const onClickCell = (row, col) => {
    setN(n + 1)
    console.log(n) //第一次点击是0，该值更新是异步的吗？因为这是拷贝一份值所以是异步的？而引用地址不变，所以没有异步更新吗？
    // const copy = JSON.parse(JSON.stringify(cells)) //这一步其实不需要！
    if (!cells[row][col]) {
      cells[row][col] = n % 2 === 0 ? 'x' : 'o'
      cells[row][col] === 'x' ? setSente('o') : setSente('x')
    }
    setCells(cells)
    console.log(cells) //cells的里边的元素有被填值，这个值到底是不是异步更新的？里边的内容居然不是异步更新的！
    console.log(cells[0][0] === 'x') //模拟点击第一个Cell，结果为true;如果是异步的，那么就是 null == 'x'了
    tell()
  }
  return (
    <div className="chessBoard">
      <div className="sente">{`${sente} 下`} </div>
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
      {finished && <div className="gameOver">{result} is the winner!</div>}
    </div>
  )
}


ReactDOM.render(<div>
  <Chessboard />
</div>, document.getElementById('root'))