import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

let routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

let router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
