import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductDetail } from 'src/app/shared/models/products';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'ism-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router,
    private panierService: PanierService
  ) {}
  productDetail!: ProductDetail;
  isDisabled: boolean = false;
  errorMessage: string = '';
  qteComd: number = 0;
  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id'];
    this.productService.getProductById(id).subscribe(
      data=>  this.productDetail =data
    );
  }

  async onLoadView(product: Product) {
    await this.router.navigateByUrl('.', { skipLocationChange: true });
    this.productService
    .getProductById(product.id).subscribe(
      data=>  this.productDetail =data
    );
    this.router.navigateByUrl(`/produits/detail/${product.id}`);
  }
  onValideQte(value: string) {
    if (value == '') {
      this.errorMessage = 'Le Champ est Obligatoire';
      this.isDisabled = true;
    } else {
      if (isNaN(Number(value))) {
        this.errorMessage = 'Veuiller Saisir un nombre';
        this.isDisabled = true;
      } else {
        if (Number(value) > this.productDetail.product.qteStock) {
          this.errorMessage = "Cette Quantite n'est  pas Disponible";
          this.isDisabled = true;
        } else {
          this.isDisabled = false;
          this.qteComd = Number(value);
        }
      }
    }
  }
  onAddPanier() {
    let product = this.productDetail.product;
    product.qteComd = Number(this.qteComd);
    this.panierService.addPanier(product);
  }
}
