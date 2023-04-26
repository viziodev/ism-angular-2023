import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/products';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'ism-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() loadView: EventEmitter<Product> = new EventEmitter<Product>();
  constructor(private panierService: PanierService) {}

  ngOnInit(): void {}

  onLoadView(product: Product) {
    this.loadView.emit(product);
  }

  onAddPanier(product: Product) {
    product.qteComd = 1;
    this.panierService.addPanier(product);
  }
}
