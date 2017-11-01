import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

/*Services*/
import { ErrorsService } from './Services/errors/errors.service';
import { SessionService } from './Services/session/session.service';
import { ApiService } from './Services/api/api.service';
import { UserService } from './Services/api/user/user.service';

/*Components*/
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { VirementsComponent } from './virements/virements.component';




const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'virements', component: VirementsComponent },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    VirementsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ErrorsService, SessionService, ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
