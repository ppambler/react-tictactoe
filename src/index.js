const div = createElement('div', 
                createElement('p', 
                  createElement('span', '我是一个span')))
                                  

document.body.appendChild(div)

function createElement(tagName, children) {
  const element = document.createElement(tagName)
  if(children) {
    if(typeof children === 'string') {
      let childrenTextNode = document.createTextNode(children)
      element.appendChild(childrenTextNode)
    } else {
      element.appendChild(children)
    }
  }
  return element
}
