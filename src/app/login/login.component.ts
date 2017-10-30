import { Component, OnInit } from '@angular/core';
import { ErrorsService } from '../Services/errors/errors.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public mail:string;
  public password:string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    $("#connectButton").removeClass("btn-info btn-danger");
    $("#connectButton").addClass("btn-warning");
    $("#connectButton").html('<i class="fa fa-circle-o-notch fa-spin"></i> Connexion');

    if(this.inputOk()){
      //authentification : todo
      //Redirection avec timeout pour faire sevi
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1500);  //5s
      
    }
    else{
      $("#connectButton").removeClass("btn-warning");
      $("#connectButton").addClass("btn-danger");
      $("#connectButton").html('Connexion');
    }
  }

  inputOk():boolean{
    let ok = true;
    let regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexCode = /^[0-9]{8}$/;
    ErrorsService.clearErrorsOnHTML();
    if(!regexMail.test(this.mail)){
      ok = false;
      ErrorsService.addErrorOnHTML("Renseignez une adresse mail correct");
    }
    if(!regexCode.test(this.password)){
      ok = false;
      ErrorsService.addErrorOnHTML("Votre code secret doit être strictement composé de 8 chiffres");
    } 
    return ok;
  }

}
