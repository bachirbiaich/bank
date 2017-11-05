import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../Services/session/session.service';

@Component({
  selector: 'bc-virements',
  templateUrl: './virements.component.html',
  styleUrls: ['./virements.component.css']
})
export class VirementsComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
    if(!SessionService.isLoggedIn())
      this.router.navigate(['/login']);
    else {
      //manip a faire ici
    }
  }

}
