import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandesRoutingModule } from './commandes-routing.module';

import { PanierComponent } from './panier/panier.component';
import { CommandesComponent } from './commande-client/commandes.component';


@NgModule({
  declarations: [
    CommandesComponent,
    PanierComponent
  ],
  imports: [
    CommonModule,
    CommandesRoutingModule
  ]
})
export class CommandesModule { }
