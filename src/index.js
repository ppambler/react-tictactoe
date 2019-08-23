import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'


const cells = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const Cell = function (props) {
  return (
    <div className="cell">
      {props.text}
    </div>
  )
}

const Chessboard = function () {
  return (
    <div>
      {
        cells.map(items =>
          <div className="row">
            {items.map(item =>
              <div className="col">
                <Cell text={item} />
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