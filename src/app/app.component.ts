import { Component, OnInit } from '@angular/core';
import { IPerSonne1, Person, Sexe } from './shared/cours/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //Variable avec type Statique
 
  age: number = 0; //reel ou entier
  tel: string = ''; //chaine
  nom: string = ``;
  isMalade: boolean = true; //boolean
  notes: number[] = [12, 23, 10]; //tableau
  //1.Objet Anonyme
  adresse = {
    ville: 'Dakar',
    quartier: 'Point R',
  };
  adresse1 = {
    ville1: 'Dakar',
    quartie: 'Point R',
  };
  //Enumeratiom
  sexe: Sexe = Sexe.Feminin;
  //Union | => AltGr+6
  sexe1: Sexe | number | string = 0;

  //2.Objet a travers une Classe

  //3.Objet a travers une interface

  //Variable avec type Dynamique
  sale: any = undefined;
  inconnu: unknown;

  //Variable avec type Generique

  //  Variable de type Function
  f: Function = function () {
    console.log('Je suis une fonction');
  };
  ngOnInit(): void {
    //` => backtrip  ==> AltGr +7
    /* console.log('Age :' + this.age);
    console.log(`Nom  :${this.nom}`);
    console.log(
      `Ville  :${this.adresse.ville}  Quartier:${this.adresse.quartier}`
    );
    this.sale = this.adresse; //Objet
    this.sale = this.notes; //Tableau

    let p1: Person = new Person();
    let p2: Person = new Person('Diop', 'Amadou');
    let iPerson: IPerSonne1 = {
      nom: 'Diop',
      prenom: 'Amadou',
    };
    let index = 0;
    for (index = 0; index < 1000; index++) {}
    console.log(index);
    console.log(this.somme(12, 4)); //Synchrone
    console.log(this.s(2, 5));
    console.log(this.f());
    let a = 12;
    let b = 15;
    console.log(
      this.operation(a, b, () => {
        return a * b;
      })
    );

    this.notes.push(12); //Ajout a la Fin
    this.notes.unshift(1); //Ajout au Debut
    for (let n of this.notes) {
      console.log(n);
    }
    this.notes.forEach((valeur, pos) => {
      console.log(`${valeur}-${pos}`);
    });

   console.log(this.notes.filter((n) => n >= 12));
    console.log(this.notes.find((n) => n > 12));
    console.log(this.notes.findIndex((n) => n > 12));
    console.log(this.notes.map((n) => n * 2));
    console.log(this.notes.some((n) => n % 2 == 0)); //Une valeur du Tableau est pair
    console.log(this.notes.every((n) => n % 2 == 0)); //Toutes les Valeurs sont paires
    console.log(this.notes
                    .map((n) => n * 2)
                    .every((n) => n % 2 == 0))*/

    let x: number = 2;
    let y: number = x;
    x = 3;
    
    let z = [1, 3, 4];
    let k = z;
    z[0] = 20;
    console.log(k);
    
    let ob = {
      nom: 'zzz',
    };
    let ob1 = ob;
    ob.nom = 'KKKK';
    console.log(ob1);
  }

  //Fonctions
  //Nommee  => Reutilisee
  somme(x: number, y: number) {
    return x + y;
  }
  produit(x: number, y: number) {
    return x + y;
  }
  //CallBack => Fonction de Rappel
  //Anonyme
  s = function (x: number, y: number): number {
    return x + y;
  };
  //Flechee
  s1 = (x: number, y: number): number => {
    return x + y;
  };
  s2 = (x: number, y: number): number => x + y;

  //CallBack  =>f
  operation(x: number, y: number, f: Function): number {
    return f(x, y);
  }

  title = 'ism-angular-2023';

  onChange(val:string){
    this.title=val;
  }
}
