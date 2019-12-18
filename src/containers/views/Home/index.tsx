import * as React from 'react'
import * as styles from './index.scss'

import { ComponentExt } from '@utils/reactExt'

class Home extends ComponentExt {
  render() {
    return (
      <div className={styles.test}>Home</div>
    )
  }
}

export default Home