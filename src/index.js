console.log('hi')

const div = document.createElement('div')
const p = document.createElement('p')
const span = document.createElement('span')

div.appendChild(p)
p.appendChild(span)
span.innerText = '我是一个span'

document.body.appendChild(div)