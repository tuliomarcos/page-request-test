import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import router from './js/utils/router'
import store from './js/utils/store/store'
import './sass/app.scss'

Vue.config.productionTip = false
Vue.component('v-select', vSelect)
Vue.use(Vuelidate)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
