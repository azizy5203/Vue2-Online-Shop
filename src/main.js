import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vueform from '@vueform/vueform/plugin'
import vueformConfig from '../vueform.config'
// import 'path/to/main.scss'

Vue.use(Vueform, vueformConfig)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
