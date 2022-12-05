import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import Toasted from 'vue-toasted';
import { createPinia } from "pinia";
import { useUserStore } from "@/store/UserStore";

// import 'path/to/main.scss'

Vue.use(Vuelidate)
Vue.use(createPinia())
Vue.use(Toasted,{
  duration:1500,
  position:'top-center'  
})

const userStore = useUserStore()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
