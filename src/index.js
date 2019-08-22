console.log('hi')

const div = createElement('div')
const p = createElement('p')
const span = createElement('span')

div.appendChild(p)
p.appendChild(span)
span.innerText = '我是一个span'

document.body.appendChild(div)

function createElement(tagName) {
  return document.createElement(tagName)
}