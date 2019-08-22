import React from 'react';
import ReactDOM from 'react-dom';

// const div = (
//   React.createElement('div', null,
//     React.createElement('p', null,
//       React.createElement('span', null, '我是一个span')))
// )
const Bottom = (
  <div>
    bottom
  </div>
)
const Header = (
  <header>
    header
  </header>
)
const Header2 = function(props) {
  return (
    <header>
      header {props.name}
    </header>  
  )
}
const Bottom2 = function() {
  const [n, setN] = React.useState(0)
  return (
    <div>
      {n}
      <button onClick={
        function() {
          setN(n+1)
        }
      }>+1</button>
    </div>
  )
}
class Bottom3 extends React.Component{
  render() {
    return (
      <div>bottom 3</div>
    )
  }
}
const div = (
  <div>
    {Header}
    {Header2({name:'jack'})}
    <Header2 name="frank" />
    <p>
      <span>我是一个span</span>
    </p>
    {Bottom}
    <Bottom2 />
    <Bottom3 />
  </div>
)

console.log(div) //element 是个虚拟的DOM，类型是对象

ReactDOM.render(div, document.getElementById('root'))


