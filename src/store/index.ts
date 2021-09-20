import Vue from "vue";
import Vuex from "vuex";
import { home } from "@/components/store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: "0.1.0",
  },
  mutations: {},
  actions: {},
  modules: {
    home,
  },
});
