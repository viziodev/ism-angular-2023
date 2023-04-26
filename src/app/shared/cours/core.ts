export class Person  implements IGenerique<Person1>{
  private nom: string; //undefined
  private prenom?: string;
  private age: number = 0;

  constructor(nom?: string, prenom?: string) {
    this.nom = nom ?? '';
    this.prenom = prenom;
  }
    affiche(a: Person1): void {
        throw new Error("Method not implemented.");
    }
}

//Injection d'attributs dans le constructeur
export class Person1 implements IPerSonne {
  constructor(
    private nom: string,
    private prenom: string,
    private age?: number
  ) {}
  affiche(): void {
    throw new Error('Method not implemented.');
  }
  affiche1(): string {
    throw new Error('Method not implemented.');
  }
}

export interface IPerSonne {
  affiche(): void;
  affiche1(): string;
}

export interface IPerSonne1 {
  nom: string;
  prenom: string; //undined
}

export enum Sexe {
  Feminin,
  Masculin,
}

export interface IGenerique<T>{
    affiche(a:T):void
}
