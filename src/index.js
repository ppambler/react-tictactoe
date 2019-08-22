const div = (
  t('div',
    t('p',
      t('span', '我是一个span')))
)

const div2 = (
  <div>
    <p>
      <span>'我是一个span'</span>
    </p>  
  </div>
)


document.body.appendChild(div)

function t(tagName, children) {
  const element = document.createElement(tagName)
  if (children) {
    if (typeof children === 'string') {
      let childrenTextNode = document.createTextNode(children)
      element.appendChild(childrenTextNode)
    } else {
      element.appendChild(children)
    }
  }
  return element
}
