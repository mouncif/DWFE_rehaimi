import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./authentification/login/login.component";
import { RegisterComponent } from "./authentification/register/register.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
import { HomeComponent } from "./home/home.component";
import { Authgard } from "./services/AuthGard";
import { ClientsComponent } from '../app/home/clients/clients.component';
import { EditsComponent } from '../app/home/clients/edits/edits.component';
import { ListComponent } from '../app/home/clients/list/list.component';
import { ProduitComponent } from './home/produit/produit.component';
import { FournisseursComponent } from './home/fournisseurs/fournisseurs.component';
import { UsersComponent } from './home/users/users.component';
import { ListProduitComponent } from './home/produit/list-produit/list-produit.component';
import { EditProduitComponent } from './home/produit/edit-produit/edit-produit.component';
import { ListFournisseurComponent } from './home/fournisseurs/list-fournisseur/list-fournisseur.component';
import { NewFournisseurComponent } from './home/fournisseurs/new-fournisseur/new-fournisseur.component';
import { ListUsersComponent } from './home/users/list-users/list-users.component';
import { EditUsersComponent } from './home/users/edit-users/edit-users.component';
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
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', component: ClientsComponent },
      { path: 'clients', component: ClientsComponent, children: [
        {path: '', component: ListComponent},
        {path: 'list', component: ListComponent},
        {path: 'edits', component: EditsComponent}
      ] },
      { path: 'products', component: ProduitComponent, children: [
        {path: '', component: ListProduitComponent},
        {path: 'edits', component:EditProduitComponent },
        {path: 'list', component: ListProduitComponent}
      ]},
      { path: 'fournisseurs', component: FournisseursComponent, children: [
        {path: '', component: ListFournisseurComponent},
        {path: 'list', component: ListFournisseurComponent},
        {path: 'edits', component: NewFournisseurComponent}
      ] },
      { path: 'users', component: UsersComponent , children: [
        {path: '', component: ListUsersComponent},
        {path: 'list', component: ListUsersComponent},
        {path: 'edits', component: EditUsersComponent}
      ]}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
