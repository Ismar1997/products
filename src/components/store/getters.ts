import { RootState } from "@/store/RootState";
import { GetterTree } from "vuex";
import { HomeState, Product } from "./types";

export const getters: GetterTree<HomeState, RootState> = {
  getProducts(state: HomeState): Product[] {
    return state.products;
  },
};
