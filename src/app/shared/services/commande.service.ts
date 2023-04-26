import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client, Panier } from '../models/panier';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  commandes: Panier[] = [];
  private url =`${environment.API}/commandes`
  constructor(private http:HttpClient) {}

  addCommande(cmde: Panier) {
    this.commandes.push(cmde);
  }

  getCommandesByClient(client: Client): Observable<Panier[]> {
    return this.http.get<Panier[]>(`${this.url}/client/${client.id}`);
   /* return this.commandes.filter(
      (cmde) => cmde.client?.id == client.id
    ) as Panier[];*/
  }
}
