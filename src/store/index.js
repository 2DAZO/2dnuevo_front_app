import { createStore } from 'vuex'
import statisticsService from "../services/statistics/statisticsService"

export default createStore({
  state: {
    statistics: null,
    products:[],
    productsTop: []
  },
  getters: {
  },
  mutations: {
    saveStatistics(state, data){
      state.statistics = data;
    }
  },
  actions: {
    async getSta({ commit }) {
      const result = await statisticsService.get();
                commit('saveStatistics', result.data);
    }
  },
  modules: {
  }
})
