import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Panier } from 'src/app/shared/models/panier';
import { PanierService } from 'src/app/shared/services/panier.service';
import { SecuriteService } from 'src/app/shared/services/securite.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  panier$!: Observable<Panier>;
  isConnect!: boolean;
  constructor(
    private panierService: PanierService,
    private secService: SecuriteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Abonnement
    this.panier$ = this.panierService.panier$.asObservable();
    //Abonnement
    this.secService.isConnect.subscribe((data) => {
      this.isConnect = data;
    });
  }

  onLogout() {
    this.secService.logout();
    this.router.navigateByUrl('/produits/catalogue');
  }
}
