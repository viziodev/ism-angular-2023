import { APP_ID, Injectable } from '@angular/core';
import { Product, ProductDetail } from '../models/products';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [];
  private url =`${environment.API}/articles`
  constructor(private http:HttpClient) {}
 
  getAllProducts():Observable<Product[]>  {
    return this.http.get<Product[]>(this.url);
   /* for (let index = 1; index <= 20; index++) {
      this.products.push({
        id: index,
        libelle: `Article${index}`,
        oldPrice: index * 10000,
        newPrice: index * 20000,
        qteStock: index * 10,
        image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        saled: index % 2 == 0,
        categorie: index % 2 == 0 ? 'Alimentaire' : 'Cosmerique',
      });
       return this.products;
      */
    }
   
  
  getProductById(id: number): Observable<ProductDetail> {
    return this.http.get<ProductDetail>(`${this.url}/${id}`);
    /*let product = this.products.find((p) => p.id == id) as Product;
    let products = this.products.filter(
      (p) => p.categorie == product.categorie && p.id != id
    ) as Product[];
    return {
      product: product,
      products: products,
    } as ProductDetail;*/
  }
}
