<template>
  <div>
    <v-app-bar color="secondary">
      <v-toolbar-title>
        <span class="white--text">Product List</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="changeRoute" class="mr-3" color="brand" id="add">
        <span class="white--text">ADD</span>
      </v-btn>
      <v-btn
        id="delete-product-btn"
        @click="deleteProducts"
        :disabled="disabledMassDelete"
        color="brand"
      >
        <span class="white--text">MASS DELETE</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Action } from "vuex-class";
import { DeleteRequest, Product } from "../store/types";

@Component
export default class AppBarHome extends Vue {
  @Prop() selectedProducts!: Product[];

  @Action("home/deleteProduct")
  deleteProduct!: (data: DeleteRequest) => Promise<void>;

  changeRoute(): void {
    this.$router.push("addproduct");
  }

  get disabledMassDelete(): boolean {
    return !this.selectedProducts || this.selectedProducts.length === 0;
  }

  deleteProducts(): void {
    if (this.selectedProducts && this.selectedProducts.length > 0)
      this.deleteProduct({ product: this.selectedProducts });
    this.$emit("deletedProduct");
  }
}
</script>

<style scoped></style>
