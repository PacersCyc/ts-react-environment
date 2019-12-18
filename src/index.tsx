import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'

import * as styles from './index.scss'
import Test from '@components/Test'
import Counter from '@views/Counter'
import App from '@shared/App'
import * as store from './store'

configure({enforceActions: 'observed'})

const render = () => {
  ReactDOM.render(
    // <div className={styles.test}>123123123123</div>,
    <Provider {...store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  )
}

render()