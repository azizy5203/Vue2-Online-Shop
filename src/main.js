import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHead from 'vue-head'
import Vuelidate from 'vuelidate'
import { createPinia } from "pinia";
import { useUserStore } from "@/store/UserStore";

// import 'path/to/main.scss'

Vue.use(VueHead)
Vue.use(Vuelidate)
Vue.use(createPinia())

const userStore = useUserStore()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
