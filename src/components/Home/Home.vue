<template>
  <div v-if="loading">
    <v-row justify="center" align="center" class="mt-12">
      <v-progress-circular
        :size="70"
        :width="7"
        color="brand"
        indeterminate
      ></v-progress-circular>
    </v-row>
  </div>
  <div v-else>
    <AppBarHome
      :selectedProducts="selectedProducts"
      @deletedProduct="resetSelectedProducts"
    />

    <v-container fluid v-if="productList.length > 0" class="my-12 mx-0">
      <v-row justify="center" align="center">
        <v-col
          v-for="product in productList"
          :key="product.id"
          cols="12"
          sm="3"
          md="3"
        >
          <v-card class="pa-0" color="secondary" height="300">
            <v-card-actions>
              <v-checkbox
                class="pa-0 delete-checkbox"
                v-model="product.checked"
                @click="addProductToSelected(product)"
              ></v-checkbox>
            </v-card-actions>
            <v-card-text class="text-center pa-1">
              <span
                class="white--text font-weight-bold"
                style="font-size: 20px"
                >{{ product.sku }}</span
              >
            </v-card-text>
            <v-card-text class="text-center pa-1 font-weight-light ">
              <span class="white--text" style="font-size: 20px">{{
                product.name
              }}</span>
            </v-card-text>
            <v-card-text class="text-center pa-1 font-weight-light">
              <span class="white--text" style="font-size: 20px">{{
                product.price
              }}</span>
            </v-card-text>
            <v-card-text class="text-center pa-1 pb-12 font-weight-light">
              <span class="white--text" style="font-size: 20px">{{
                productType(product)
              }}</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid v-else>
      <v-col cols="12">
        <v-row justify="center" align="center">
          <span>No products found</span>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { Product } from "../store/types";
import AppBarHome from "./AppBarHome.vue";

@Component({
  components: {
    AppBarHome,
  },
})
export default class Home extends Vue {
  loading = true;
  checked = true;
  selectedProducts = Array<Product>();

  @Action("home/fetchProducts")
  fetchProducts!: () => Promise<void>;

  @Getter("home/getProducts")
  products!: Product[];

  addProductToSelected(product: Product): void {
    const i = this.selectedProducts.findIndex(
      (p: Product) => p.id === product.id
    );

    if (product.checked && i === -1) this.selectedProducts.push(product);
    else if (!product.checked && i !== -1) this.selectedProducts.splice(i, 1);
  }

  productType(product: Product): string {
    return (
      product.product_type.charAt(0).toUpperCase() +
      product.product_type.slice(1).toLowerCase()
    );
  }

  get productList(): Product[] {
    return this.products;
  }

  resetSelectedProducts(): void {
    this.selectedProducts = [];
  }

  created(): void {
    this.fetchProducts().then(() => (this.loading = false));
  }
}
</script>

<style scoped></style>
