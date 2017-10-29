import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

/*Components*/
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

/*Services*/
import { ErrorsService } from './Services/errors/errors.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ErrorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
