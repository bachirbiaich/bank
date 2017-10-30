import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'bc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems:any = [
    {'name':'Mouvements','route':'/dashboard','faIconClass':'line-chart'},
    {'name':'Virements','route':'/virements','faIconClass':'university'}
  ];

  currentRoute:string;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
   }

  ngOnInit() {
    $(function(){
      
        $('#slide-submenu').on('click',function() {			        
              $(this).closest('.list-group').fadeOut('slide',function(){
                $('.mini-submenu').fadeIn();	
              });
              
            });
      
        $('.mini-submenu').on('click',function(){		
              $(this).next('.list-group').toggle('slide');
              $('.mini-submenu').hide();
        })
      })      
  }

  logout(){
    console.log("logout");
    this.router.navigate(['/login']);
  }

}
