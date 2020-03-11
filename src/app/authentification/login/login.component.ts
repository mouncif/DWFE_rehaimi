import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { utilisateur } from '../../models/utilisateur.model';
import { UtilisateurService } from "../../services/utilisateur.service";
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(private service: UtilisateurService, private router: Router, public notification: MatSnackBar) { }

  ngOnInit() {
    this.onClear();
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
            this.router.navigateByUrl('home/clients');
            this.notification.open('Bienvenu. vous etes: '+val['profils'])._dismissAfter(3000);
            localStorage.setItem("id", val["id"]);
            localStorage.setItem("loged", 'loged');
            if (val['profils'] == 'Admin') {
              this.router.navigateByUrl('home/clients/list');
              //norlmelemnt chaque profile a sa propre page home
            }
            if (val['profils'] == 'User') {
              this.router.navigateByUrl('home/clients/list');
              //norlmelemnt chaque profile a sa propre page home
            }
            if (val['profils'] == 'Editor') {
              this.router.navigateByUrl('home/clients/list');
              //norlmelemnt chaque profile a sa propre page home
            }

          } else {
            console.log('No user');
            //this.notification.open('Invalid Identifiant!')._dismissAfter(3000);
          }
        }
      });
    } else {
      console.log('Identifiant incorrecte !!');
      this.notification.open('Invalid Identifiant!')._dismissAfter(3000);
    }
  }


  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

}
