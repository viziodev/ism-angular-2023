import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'produits',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'cmdes',
    loadChildren: () =>
      import('./commandes/commandes.module').then((m) => m.CommandesModule),
  },
  {
    path: 'securite',
    loadChildren: () =>
      import('./shared/securite/securite.module').then((m) => m.SecuriteModule),
  },
  {
    path: '',
    redirectTo: '/produits/catalogue',
    pathMatch: 'full',
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
