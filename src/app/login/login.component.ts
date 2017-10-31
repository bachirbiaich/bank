import { Component, OnInit } from '@angular/core';
import { ErrorsService } from '../Services/errors/errors.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public mail: string;
  public password: string;
  public isFetching: boolean;
  public formIsOk: boolean;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.isFetching = false;
    this.formIsOk = true;
  }

  login(): void {
    this.isFetching = true;
    if (this.inputOk()) {
      // authentification : todo
      // Redirection avec timeout pour faire sevi
      const body = { username: this.mail, password: this.password};
      this.http
      .post('http://localhost:1339/login', body)
      .subscribe((response) => {
        console.log(response);
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1500);  // 5s
      });
      } else {
        this.isFetching = false;
        this.formIsOk = false;
    }
  }

  inputOk(): boolean {
    let ok = true;
    // tslint:disable-next-line:max-line-length
    const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexCode = /^[0-9]{8}$/;
    ErrorsService.clearErrorsOnHTML();
    if (!regexMail.test(this.mail)) {
      ok = false;
      ErrorsService.addErrorOnHTML('Renseignez une adresse mail correct');
    }
    if (!regexCode.test(this.password)) {
      ok = false;
      ErrorsService.addErrorOnHTML('Votre code secret doit être strictement composé de 8 chiffres');
    }
    return ok;
  }

}
