<template>
  <div>
    <v-app-bar color="secondary">
      <v-toolbar-title>
        <span class="white--text">Product Add</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="disabledButton"
        @click="createNewProduct"
        class="mr-1"
        color="brand"
      >
        <span class="white--text">Save</span>
      </v-btn>
      <v-btn color="brand">
        <span class="white--text" @click="changeRoute">Cancel</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Action } from "vuex-class";
import { Product, ProductType } from "../store/types";

@Component
export default class AppBarProduct extends Vue {
  @Prop() sku!: string;
  @Prop() name!: string;
  @Prop() price!: string;
  @Prop() product_type!: ProductType;
  @Prop() size!: ProductType;
  @Prop() height!: ProductType;
  @Prop() width!: ProductType;
  @Prop() length!: ProductType;
  @Prop() weight!: ProductType;
  @Prop() valid!: boolean;

  @Action("home/createProduct")
  createNewProductAction!: (data: Product) => Promise<void>;

  createNewProduct() {
    console.log(this.size);

    this.createNewProductAction({
      sku: this.sku,
      name: this.name,
      price: this.price,
      product_type: this.product_type,
      size: this.size,
      height: this.height,
      width: this.width,
      length: this.length,
      weight: this.weight,
    } as Product);
    this.$emit("productSaved");
    this.changeRoute();
  }

  changeRoute() {
    this.$router.push("/");
  }

  get compSku() {
    return this.sku;
  }
  get compName() {
    return this.name;
  }
  get compPrice() {
    return this.price;
  }
  get compProductType() {
    return this.product_type;
  }

  get disabledButton() {
    if (!this.valid || !this.compProductType) return true;
    return false;
  }
}
</script>

<style scoped></style>
