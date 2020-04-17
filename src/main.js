import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import store from './js/utils/store/store.js'
import './sass/app.scss'

Vue.config.productionTip = false
Vue.component('v-select', vSelect)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
