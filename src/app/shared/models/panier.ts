import { Product } from './products';

export interface Panier {
  id?:number
  products: Product[];
  client?: Client;
  totalTtc: number;
  totalHtc: number;
  tva: number;
  date: Date;
}

export interface Client {
  id?: number;
  nomComplet?: string;
  login: string;
  password: string;
  role?: Role|string[];
}

export enum Role {
  Client,
}
