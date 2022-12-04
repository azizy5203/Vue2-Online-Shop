import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginForm from '@/components/local/LoginForm.vue'
import ProductsPage from '@/pages/ProductsPage.vue'
import { useUserStore } from "@/store/UserStore";
import NotFound from '@/pages/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginForm',
    component: LoginForm,
    meta: {isGuest: true},
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage,
    meta: { requiresAuth: true },
  },
  {
    path: '*',
    name: 'Notfound',
    component: NotFound,
  },
  // {
  //   path:"*",
  //   redirect:'/404'
  // }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  if (to.meta.requiresAuth && !store.$state.Token) {
      next({ name: "LoginForm" })
  } else if(store.$state.Token && to.meta.isGuest) {
      next({name:'ProductsPage'})
  }
  else{
      next()
  }
});

export default router
