import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material/material.module';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from "@angular/forms";
import { UtilisateurService } from './services/utilisateur.service';
import { ProduitService } from './services/produit.service';
import { ClientService } from './services/client.service';
import { FournisseurService } from './services/fournisseur.service';
import { NavbarComponent } from './home/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UtilisateurService, ProduitService, ClientService, FournisseurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
