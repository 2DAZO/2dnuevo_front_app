import { createStore } from 'vuex'
import statisticsService from "../services/statistics/statisticsService"
import Shopservice from "../services/shops/shopsServices"


export default createStore({
  state: {
    statistics: null,
    products:[],
    productsTop: [],
    shops: null
  },
  getters: {
  },
  mutations: {
    saveStatistics(state, data){
      state.statistics = data;
    },
    saveShops(state, data){
      state.shops = data;
    }
  },
  actions: {
    async getSta({ commit }) {
      const result = await statisticsService.get();
                commit('saveStatistics', result.data);
    },
    async getShops({ commit }) {
      const result = await Shopservice.get();
                commit('saveShops', result.data);
    }
  },
  modules: {
  }
})
