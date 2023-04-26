import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './commande-client/commandes.component';

import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: '', component: CommandesComponent },
  { path: 'panier', component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandesRoutingModule {}
