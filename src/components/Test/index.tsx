import * as React from "react"
import { Button } from 'antd'
// import 'antd/lib/button/style/index.less'
import { ComponentExt } from '@utils/reactExt'

@log
class Test extends ComponentExt {
  showMsg = () => {
    this.$message.success('这是一个通知')
  }

  render() {
    return (
      <div>
        <Button onClick={this.showMsg} type="primary">123</Button>
      </div>
    )
  }
}

function log(target: any) {
  console.log(target)
}

export default Test