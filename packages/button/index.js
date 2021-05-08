// 导入组件，组件必须声明 name
import InButton from './src'

// 为组件提供 install 安装方法，供按需引入
InButton.install = function (Vue) {
  Vue.component(InButton.name, InButton)
}

// 导出组件
export default InButton
