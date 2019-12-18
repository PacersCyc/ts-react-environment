import * as React from 'react'

@log
class Test extends React.Component {
  render() {
    return (
      <div>test</div>
    )
  }
}

function log(target: any) {
  console.log(target)
}

export default Test