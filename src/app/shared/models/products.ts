export interface Product {
  id: number;
  libelle: string;
  oldPrice?: number;
  newPrice: number;
  image: string;
  saled: boolean;
  categorie: string;
  qteStock: number;
  qteComd?: number;
}

export interface ProductDetail {
  product: Product;
  products: Product[];
}
