import { Module } from "vuex";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";
import { HomeState } from "./types";
import { RootState } from "@/store/RootState";

export const ADD_PRODUCT = "addProduct";

const namespaced = true;

export const state: HomeState = {
  products: [],
};

export const home: Module<HomeState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
