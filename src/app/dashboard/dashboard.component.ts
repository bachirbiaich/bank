import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from '../Classes/compte';
import { Mouvement } from '../Classes/mouvement';
import { CompteService } from '../Services/api/compte/compte.service';
import { MouvementService } from '../Services/api/mouvement/mouvement.service';
import { SessionService } from '../Services/session/session.service';
import { ErrorsService } from '../Services/errors/errors.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  comptes:Array<Compte> = [];
  mouvements:Array<Mouvement> = [];
  
  constructor(private router:Router, private compteService:CompteService, private mouvementService:MouvementService) {
  }

  ngOnInit() {
    if(!SessionService.isLoggedIn())
      this.router.navigate(['/login']);
    this.compteService.getComptes()
    .subscribe(
      resp => {
        if(resp.data.length>0){
          this.comptes = resp.data;
          this.mouvementService.getMouvementsByCompteId(this.comptes[0]._id)
          .subscribe(
            resp => {
              if(resp.data.length>0){
                this.mouvements = resp.data;
              }
              else
                ErrorsService.addErrorOnHTML("Aucun mouvement sur ce compte");
            },
            err => {
              ErrorsService.addErrorOnHTML("Erreur lors de la récupération des mouvements du compte");
          });
        }
        else
          ErrorsService.addErrorOnHTML("Vous ne disposez d'aucun compte");
      },
      err => {
        ErrorsService.addErrorOnHTML("Erreur lors de la récupération des comptes");
    });
  }

}
