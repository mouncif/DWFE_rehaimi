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
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ProduitComponent } from './home/produit/produit.component';
import { ClientsComponent } from './home/clients/clients.component';
import { FournisseursComponent } from './home/fournisseurs/fournisseurs.component';
import { UsersComponent } from './home/users/users.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './home/clients/list/list.component';
import { EditsComponent } from './home/clients/edits/edits.component';
import { ListProduitComponent } from './home/produit/list-produit/list-produit.component';
import { EditProduitComponent } from './home/produit/edit-produit/edit-produit.component';
import { EditUsersComponent } from './home/users/edit-users/edit-users.component';
import { NewFournisseurComponent } from './home/fournisseurs/new-fournisseur/new-fournisseur.component';
import { ListFournisseurComponent } from './home/fournisseurs/list-fournisseur/list-fournisseur.component';
import { ListUsersComponent } from './home/users/list-users/list-users.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ProduitComponent,
    ClientsComponent,
    FournisseursComponent,
    UsersComponent,
    AboutComponent,
    ListComponent,
    EditsComponent,
    ListProduitComponent,
    EditProduitComponent,
    EditUsersComponent,
    NewFournisseurComponent,
    ListFournisseurComponent,
    ListUsersComponent
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
