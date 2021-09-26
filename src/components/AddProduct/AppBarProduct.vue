<template>
  <div>
    <v-app-bar color="secondary">
      <v-toolbar-title>
        <span class="white--text">Product Add</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        id="save"
        :disabled="disabledButton"
        @click="createNewProduct"
        class="mr-1"
        color="brand"
      >
        <span class="white--text">Save</span>
      </v-btn>
      <v-btn color="brand" @click="changeRoute" id="cancel">
        <span class="white--text">Cancel</span>
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
  @Prop() productType!: string;
  @Prop() size!: ProductType;
  @Prop() height!: ProductType;
  @Prop() width!: ProductType;
  @Prop() length!: ProductType;
  @Prop() weight!: ProductType;
  @Prop() valid!: boolean;

  @Action("home/createProduct")
  createNewProductAction!: (data: Product) => Promise<void>;

  createNewProduct() {
    this.createNewProductAction({
      sku: this.sku,
      name: this.name,
      price: this.price,
      product_type: this.productType.toUpperCase(),
      size: this.size ? this.size : null,
      height: this.height ? this.height : null,
      width: this.width ? this.width : null,
      length: this.length ? this.length : null,
      weight: this.weight ? this.weight : null,
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
    return this.productType;
  }

  get disabledButton() {
    if (
      !this.valid ||
      !this.compProductType ||
      (this.productType === "Book" && this.weight.length === 0) ||
      (this.productType === "Furniture" && this.height.length === 0) ||
        this.width.length === 0 ||
        this.length.length === 0 ||
      (this.productType === "Dvd" && this.size.length === 0)
    )
      return true;
    return false;
  }
}
</script>

<style scoped></style>
