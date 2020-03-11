import { Component, OnInit } from '@angular/core';
import { utilisateur } from '../../../models/utilisateur.model';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Permission {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-securpermisson',
  templateUrl: './securpermisson.component.html',
  styleUrls: ['./securpermisson.component.css']
})


export class SecurpermissonComponent implements OnInit {
  permissions: Permission[] = [
    {value: 'User', viewValue: 'User'},
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'Visitor', viewValue: 'Visitor'}
  ];
  private email: string;
  private user: utilisateur = {
    profils: '',
    dateCreation: '',
    dateFin: '',
    photo: '',
    email: '',
    identifiant: ''
  };
  users: utilisateur[] = [];

  constructor(private service: UtilisateurService,  public notification: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.getConnectedUser();
  }

  getConnectedUser() {
    this.service.findUser(localStorage.getItem('id')).subscribe(
      (user: utilisateur) => {
        this.email = user.email;
      }
    );
  }

  updatePermission() {
    this.user = this.service.form.value;
    console.log(this.user.profils);
    console.log(this.user.id);
    if (this.user.profils != null) {
      console.log(this.user.profils);
      console.log(this.user.id);
      this.service.findUser(this.user.id).subscribe(
        (user: utilisateur) => {
          user.profils = this.user.profils;
          this.service.update(user)
            .subscribe((cli) => {
              console.log(cli);
              this.notification.open('Update Succesful ...')._dismissAfter(3000);
              this.email = this.user.email;
              this.getConnectedUser();
              this.onClear();
            });
        }
      );
    } else {
      this.notification.open('Failed ...')._dismissAfter(2000);
      this.getConnectedUser();
      this.onClear();
    }

  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

}
