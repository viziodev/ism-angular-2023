import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client, Role } from '../models/panier';

@Injectable({
  providedIn: 'root',
})
export class SecuriteService {
  clients: Client[] = [];
 // userConnect!: Client | null;
  isConnect: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private url = `${environment.API}/security`;
  constructor(private http: HttpClient) {}
  /*initClient() {
    this.clients.push({
      id: 2,
      nomComplet: 'Birane Baila Wane',
      login: 'client',
      password: 'client',
      role: Role.Client,
    });
  }*/

  connexion(login: string, password: string): Observable<Client> {
    /* this.userConnect = this.clients.find(
      (user) => user.login == login && user.password == password
    ) as Client;
    this.isConnect.next(this.userConnect != null);*/
    return this.http.post<Client>(`${this.url}/login`, {
      login: login,
      password: password,
    });
  }

  logout() {
    //this.userConnect = null;
    this.isConnect.next(false);
    this.removeUser();
  }

  readonly userKey = environment.USERKEY;
  removeUser(): void {
    localStorage.removeItem(this.userKey);
  }
  saveUser(client: Client): void {
     this.isConnect.next(true)
     localStorage.setItem(this.userKey, JSON.stringify(client));
  }

  getUser(): Client | null {
    const client = localStorage.getItem(this.userKey);
    if (client != null) {
      return JSON.parse(client) as Client;
    }
    return null;
  }
}
