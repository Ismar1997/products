import { ActionTree } from "vuex";
import { RootState } from "@/store/RootState";
import { DeleteRequest, HomeState, Product } from "./types";
import { apiUrl } from "@/services/api.service";

export const actions: ActionTree<HomeState, RootState> = {
  async fetchProducts({ commit }) {
    try {
      const response = await apiUrl.get("read.php");
      commit("setProducts", response.data);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  },

  async createProduct({ commit }, data: Product) {
    try {
      const response = await apiUrl.post("create.php", data);
      if (response.status === 200)
        commit("addNewProduct", response.data.product);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  },

  async deleteProduct({ commit }, data: DeleteRequest) {
    try {
      const response = await apiUrl.delete("delete.php", { data });
      commit("deleteProduct", data.id);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
};
