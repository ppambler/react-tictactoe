import React from 'react';
import ReactDOM from 'react-dom';

// const div = (
//   React.createElement('div', null,
//     React.createElement('p', null,
//       React.createElement('span', null, '我是一个span')))
// )
const Header = (
  <header>
    header
  </header>
)

const Bottom = (
  <div>
    bottom
  </div>
)
const div = (
  <div>
    {Header}
    <p>
      <span>我是一个span</span>
    </p>
    {Bottom}
  </div>
)

console.log(div) //element 是个虚拟的DOM，类型是对象

ReactDOM.render(div, document.getElementById('root'))


