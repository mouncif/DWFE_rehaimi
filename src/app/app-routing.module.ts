import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./authentification/login/login.component";
import { RegisterComponent } from "./authentification/register/register.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
import { HomeComponent } from "./home/home.component";
import { Authgard } from "./services/AuthGard";
const routes: Routes = [
  {
    path: '', component: AuthentificationComponent,
    //canActivate: [Authgard],
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
