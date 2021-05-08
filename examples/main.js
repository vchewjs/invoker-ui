import Vue from 'vue'
import App from './App.vue'
import './assets/font/inIcon.scss'
// import InButton from './components/button.vue'
// import InDialog from './components/dialog.vue'
// 导入组件库
import InvokerUi from '../packages'
// 注册组件库
Vue.use(InvokerUi)

Vue.config.productionTip = false

// Vue.component(InButton.name, InButton)
// Vue.component(InDialog.name, InDialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
