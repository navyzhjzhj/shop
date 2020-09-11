import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Exit from '../components/Exit.vue'

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/exit', component: Exit }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path === '/login') {
    next()
  } else {
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) {
      this.$router.push('/login')
    } else {
      next()
    }
  }
})

export default router
