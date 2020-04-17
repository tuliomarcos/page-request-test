import * as InfoPageService from '../../services/InfoPageService'
import * as Select from '../../options/OptionsSelect'

// export const namespaced = true

export const state = {
	infoPage: {},
	optionsSelect: {}
}

export const mutations = {
	SET_INFO_PAGE(state, data) {
		state.infoPage = data
	},
	SET_OPTIONS_SELECT(state, data) {
		state.optionsSelect = data
	}
}

export const actions = {
	initTexts({ dispatch }) {
		dispatch('setTexts')
		dispatch('setOptionsSelect')
	},
	setTexts({ commit }) {
		return InfoPageService
			.texts()
			.then(response => {
				commit('SET_INFO_PAGE', response)
			})
	},
	setOptionsSelect({ commit }) {
		return commit('SET_OPTIONS_SELECT', Select.options())
	}
}

export const getters = {
	isAppEmpty: app => app.length === 0,
}