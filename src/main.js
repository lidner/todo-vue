import Vue from 'vue'
import VueRouter from 'vue-router'
import Master from './components/layouts/Master'
import router from './router'
import { store } from './store/store'

window.eventBus = new Vue()

Vue.config.productionTip = false
Vue.use(VueRouter)


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
       name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.loggedIn) {
      next({
       name: 'todo',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

new Vue({
  router: router,
  store: store,
  render: h => h(Master)
}).$mount('#app')
