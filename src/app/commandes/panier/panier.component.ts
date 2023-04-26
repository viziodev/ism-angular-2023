import { Component, OnInit } from '@angular/core';
import { Panier } from 'src/app/shared/models/panier';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'ism-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  panier!: Panier;
  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.panierService.panier$.subscribe((data) => {
      this.panier = data;
    });
  }
}
