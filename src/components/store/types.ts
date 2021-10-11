export interface HomeState {
  products: Array<Product>;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  price: string;
  product_type: ProductType;
  size?: string;
  width?: string;
  height?: string;
  length?: string;
  weight?: string;
  checked?: boolean;
}

export enum ProductType {
  DVD = "DVD",
  BOOK = "BOOK",
  FURNITURE = "FURNITURE",
}

export interface DeleteRequest {
  product: Product[];
}
