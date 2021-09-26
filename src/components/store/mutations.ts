import { MutationTree } from "vuex";
import { HomeState, Product } from "./types";

export const mutations: MutationTree<HomeState> = {
  setProducts(state: HomeState, payload: Product[]) {
    state.products = payload;
  },
  addNewProduct(state: HomeState, payload: Product) {
    if (state.products.length === 0) {
      state.products.push(payload);
    } else {
      const i = state.products.findIndex(
        (p: Product) => p.sku === payload.sku && p.name === payload.name
      );
      if (i === -1) state.products.push(payload);
    }
  },
  deleteProduct(state: HomeState, id: string) {
    const i = state.products.findIndex((p: Product) => p.sku === id);
    state.products.splice(i, 1);
  },
};