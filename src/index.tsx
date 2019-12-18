import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as styles from './index.scss'
import Test from '@components/Test'

const render = () => {
  ReactDOM.render(
    // <div className={styles.test}>123123123123</div>,
    <Test />,
    document.querySelector('#app')
  )
}

render()