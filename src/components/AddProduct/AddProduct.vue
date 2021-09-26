<template>
  <div>
    <AppBarProduct
      :sku="sku"
      :name="name"
      :price="priceInString"
      :productType="productType"
      :size="convertNumberToString(size)"
      :height="convertNumberToString(height)"
      :width="convertNumberToString(width)"
      :length="convertNumberToString(length)"
      :weight="convertNumberToString(weight)"
      :valid="valid"
      @productSaved="resetInputFields"
    />

    <v-form v-model="valid" id="product_form">
      <v-container fluid>
        <v-row justify="start" align="center">
          <v-col cols="2" sm="1" md="1" lg="1">
            <span>SKU</span>
          </v-col>
          <v-col cols="6" sm="10" md="10" lg="11">
            <v-text-field
              id="sku"
              v-model="sku"
              :rules="nameRules"
              label="SKU"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid>
        <v-row justify="start" align="center">
          <v-col cols="2" sm="1" md="1" lg="1">
            <span>Name</span>
          </v-col>
          <v-col cols="6" sm="10" md="10" lg="11">
            <v-text-field
              id="name"
              v-model="name"
              :rules="nameRules"
              outlined
              label="Name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid>
        <v-row justify="start" align="center">
          <v-col cols="2" sm="1" md="1" lg="1">
            <span>Price</span>
          </v-col>
          <v-col cols="6" sm="10" md="10" lg="11">
            <v-text-field
              id="price"
              v-model="price"
              :rules="priceRules"
              type="number"
              label="Price"
              required
              outlined
              @change="convertPriceToString"
              append-icon="mdi-currency-usd"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-container fluid>
      <v-row justify="start" align="center">
        <v-col cols="4" sm="2" md="2" lg="1">
          <span>Type Switcher</span>
        </v-col>
        <v-col cols="6" sm="10" md="10" lg="11">
          <v-select
            id="#product_type"
            v-model="productType"
            :items="productTypes"
            label="Type Switcher"
            dense
            outlined
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

    <div v-if="productType">
      <v-container fluid v-if="productType === 'Dvd'">
        <v-card>
          <v-col>
            <v-row justify="start" align="center">
              <v-col cols="3" sm="2" md="2" lg="1">
                <span>Size (MB)</span>
              </v-col>
              <v-col cols="6" sm="10" md="10" lg="11">
                <v-text-field
                  v-model="size"
                  id="size"
                  max-width="200"
                  label="Size"
                  outlined
                  type="number"
                  :rules="priceRules"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <span class="mb-4 ml-4">"{{ decription }}"</span>
            </v-row>
          </v-col>
        </v-card>
      </v-container>
      <v-container fluid v-if="productType === 'Furniture'">
        <v-card>
          <v-col>
            <v-row justify="start" align="center">
              <v-col cols="3" sm="2" md="2" lg="1">
                <span>Height (CM)</span>
              </v-col>
              <v-col cols="6" sm="10" md="10" lg="11">
                <v-text-field
                  id="height"
                  v-model="height"
                  max-width="200"
                  label="Height (CM)"
                  outlined
                  type="number"
                  :rules="priceRules"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row justify="start" align="center">
              <v-col cols="3" sm="2" md="2" lg="1">
                <span>Width (CM)</span>
              </v-col>
              <v-col cols="6" sm="10" md="10" lg="11">
                <v-text-field
                  id="width"
                  v-model="width"
                  max-width="200"
                  label="Width (CM)"
                  outlined
                  type="number"
                  :rules="priceRules"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row justify="start" align="center">
              <v-col cols="3" sm="2" md="2" lg="1">
                <span>Length (CM)</span>
              </v-col>
              <v-col cols="6" sm="10" md="10" lg="11">
                <v-text-field
                  id="length"
                  v-model="length"
                  max-width="200"
                  label="Length (CM)"
                  outlined
                  :rules="priceRules"
                  type="number"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <span class="mb-4 ml-4">"{{ decription }}"</span>
            </v-row>
          </v-col>
        </v-card>
      </v-container>
      <v-container fluid v-if="productType === 'Book'">
        <v-card>
          <v-col>
            <v-row justify="start" align="center">
              <v-col cols="3" sm="2" md="2" lg="1">
                <span>Weight (KG)</span>
              </v-col>
              <v-col cols="6" sm="10" md="10" lg="11">
                <v-text-field
                  id="weight"
                  v-model="weight"
                  max-width="200"
                  label="Weight (KG)"
                  outlined
                  type="number"
                  :rules="priceRules"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <span class="mb-4 ml-4">"{{ decription }}"</span>
            </v-row>
          </v-col>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { ProductType } from "../store/types";
import AppBarProduct from "./AppBarProduct.vue";

@Component({
  components: {
    AppBarProduct,
  },
})
export default class AddProduct extends Vue {
  valid = false;
  sku = "";
  name = "";
  price = 1;
  size = "";
  height = "";
  width = "";
  length = "";
  weight = "";
  decription = "";
  priceInString = "";

  nameRules = [
    (v: any) => !!v || "Name is required",
    (v: any) =>
      (v.length <= 30 && v.length > 0) ||
      "SKU / Name must be less than 30 characters",
  ];
  priceRules = [
    (v: any) => !!v || "Price is required",
    (v: any) =>
      (v.length <= 6 && v.length > 0) || "Price must be less than 6 numbers",
  ];

  productTypes = [
    this.capitalize(ProductType.DVD),
    this.capitalize(ProductType.BOOK),
    this.capitalize(ProductType.FURNITURE),
  ];

  productType: ProductType | null = null;

  @Watch("productType")
  onSelectedProductTypeChanged(newValue: ProductType) {
    // Reset values when product type is changed
    this.size = "";
    this.height = "";
    this.width = "";
    this.length = "";
    this.weight = "";

    if (newValue === this.capitalize(ProductType.DVD))
      this.decription = "Please, provide size";
    if (newValue === this.capitalize(ProductType.BOOK))
      this.decription = "Please, provide weight";
    if (newValue === this.capitalize(ProductType.FURNITURE))
      this.decription = "Please, provide dimensions";
  }

  convertPriceToString() {
    if (this.price !== 1 || this.price.toString().length !== 0) {
      this.priceInString = `${this.price}$`;
    }
  }

  convertNumberToString(num: number) {
    if (num !== 1 || num.toString().length !== 0) {
      return `${num}`;
    }
  }

  resetInputFields() {
    this.sku = "";
    this.name = "";
    this.price = 1;
    this.size = "";
    this.height = "";
    this.width = "";
    this.length = "";
    this.weight = "";
    this.productType = null;
  }

  capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
}
</script>

<style scoped>
::v-deep
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot {
  max-width: 300px;
  margin-left: 30px;
  margin-top: 30px;
}
</style>