import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Panier } from '../models/panier';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  panier$: BehaviorSubject<Panier> = new BehaviorSubject<Panier>({
    products: [],
    totalHtc: 0,
    totalTtc: 0,
    tva: environment.TVA,
    date:new Date()
  });
  constructor() {}

  addPanier(product: Product) {
    let panier = this.panier$.getValue();
    let montant: number = product.newPrice * (product.qteComd ?? 0);
    panier.totalHtc += montant;
    panier.totalTtc += montant * (1 + environment.TVA);
    panier.products.push(product);
    this.panier$.next(panier);
  }
  deletePanier() {}
  clearPanier() {
    this.panier$.next({
      products: [],
      totalHtc: 0,
      totalTtc: 0,
      tva: environment.TVA,
      date:new Date()
    });
  }
}
