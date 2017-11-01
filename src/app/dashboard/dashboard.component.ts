import { Component, OnInit } from '@angular/core';
import { Compte } from '../Classes/compte';
import { Mouvement } from '../Classes/mouvement';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  comptes:Array<Compte> = [];
  mouvement:Array<Mouvement> = [];
  
  constructor(private router:Router) {}

  ngOnInit() {
    //todo : charger les comptes de l'utilisateur et les mettre dans this.compte
  }

}
