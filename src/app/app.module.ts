import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

/*Services*/
import { ErrorsService } from './Services/errors/errors.service';

/*Components*/
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { VirementsComponent } from './virements/virements.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';


const appRoutes: Routes = [
  { path: 'login', component: HomeComponent },
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
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [ErrorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
