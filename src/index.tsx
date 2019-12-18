import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './index.scss'

const render = () => {
  ReactDOM.render(
    <div className="test">123</div>,
    document.querySelector('#app')
  )
}

render()