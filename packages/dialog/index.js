// 导入组件，组件必须声明 name
import InDialog from './src'

// 为组件提供 install 安装方法，供按需引入
InDialog.install = function (Vue) {
  Vue.component(InDialog.name, InDialog)
}

// 导出组件
export default InDialog
