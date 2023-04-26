import { Component, OnInit } from '@angular/core';
import { Panier } from 'src/app/shared/models/panier';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { SecuriteService } from 'src/app/shared/services/securite.service';

@Component({
  selector: 'ism-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css'],
})
export class CommandesComponent implements OnInit {
  constructor(
    private secService: SecuriteService,
    private cmdeService: CommandeService
  ) {}
  commandesClient: Panier[] = [];
  detailCommande!:Panier
  ngOnInit(): void {
    const client=this.secService.getUser()
    if (client ) {
        this.cmdeService.getCommandesByClient(client).subscribe(
            data=>this.commandesClient =data as Panier[] 
        );
    } else {
      //Redirection
    }
  }

  onDetailCommande(cmd:Panier){
    this.detailCommande=cmd
  }
}
