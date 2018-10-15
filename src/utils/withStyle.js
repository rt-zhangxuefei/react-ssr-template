import React, { Component } from 'react'

// 封装抽取需要注入服务器端渲染css的逻辑
export default (WithStyleComponent, styles) => {
  class WrappedComponent extends Component {
    componentWillMount() {
      const { staticContext } = this.props
      staticContext && staticContext.css.push(styles._getCss())
    }

    render() {
      return <WithStyleComponent {...this.props} />
    }
  }

  // 把组件附加的属性赋给包装以后的组件（WrappedComponent)
  Object.keys(WithStyleComponent).forEach(
    k => (WrappedComponent[k] = WithStyleComponent[k])
  )

  return WrappedComponent
}
