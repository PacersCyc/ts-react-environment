import * as React from 'react'
import { Button } from 'antd'
// import 'antd/lib/button/style/index.less'

@log
class Test extends React.Component {
  render() {
    return (
      <div>
        <Button>123</Button>
      </div>
    )
  }
}

function log(target: any) {
  console.log(target)
}

export default Test