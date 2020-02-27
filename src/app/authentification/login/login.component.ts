import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { utilisateur } from '../../models/utilisateur.model';
import { UtilisateurService } from "../../services/utilisateur.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: object;
  private user: utilisateur = {
    profils: '',
    dateCreation: '',
    dateFin: '',
    photo: '',
    email: '',
    identifiant: ''
  };
  constructor(private service: UtilisateurService, private router: Router) { }

  ngOnInit() {

  }

  onLogin() {
    this.user = this.service.form.value;
    if (this.service.form.valid) {
      this.user = this.service.form.value;
      this.service.getAll().subscribe((data: any) => {
        this.users = data;
        for (var val of data) {
          if (val['email'] == this.user.email && val['identifiant'] == this.user.identifiant) {
            console.log('exist');
            this.router.navigateByUrl('home');
            localStorage.setItem("loged", 'loged');
            if (val['profils'] == 'Admin') {
              this.router.navigateByUrl('home');
              //norlmelemnt chaque profile a sa propre page home
            }
            if (val['profils'] == 'User') {
              this.router.navigateByUrl('home');
              //norlmelemnt chaque profile a sa propre page home
            }
            if (val['profils'] == 'Editor') {
              this.router.navigateByUrl('home');
              //norlmelemnt chaque profile a sa propre page home
            }
            break;
          } else {
            console.log('No user');
          }
        }
      });
    } else {
      console.log('Identifiant incorrecte !!');
    }
  }


  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

}
