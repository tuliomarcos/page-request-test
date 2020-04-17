import Vue from 'vue'
import Vuex from 'vuex'
import * as infoPage from './modules/infoPage'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
    infoPage,
  },
})