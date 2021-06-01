import Vue from "vue";
import Vuex from "vuex";

import Auth from "./warehouse/Auth";
import ProductWarehouse from "./warehouse/ProductWarehouse"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Auth, ProductWarehouse },
  state: {},
  mutations: {},
  actions: {},
});
