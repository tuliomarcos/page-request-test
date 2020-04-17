import Vue from 'vue'
import Vuex from 'vuex'
import * as infoPage from './modules/info-page'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
    infoPage,
  },
})