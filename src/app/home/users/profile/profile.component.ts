import { Component, OnInit } from '@angular/core';
import { utilisateur } from 'src/app/models/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListUsersComponent } from '../list-users/list-users.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user: utilisateur = {
    profils: '',
    dateCreation: '',
    dateFin: '',
    photo: '',
    email: '',
    identifiant: ''
  };
  private confirmIdentifiant: string;
  private oldidentifiant: string;
  private email: string;
  users: utilisateur[] = [];

  constructor(private service: UtilisateurService, public notification: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.getConnectedUser();
  }

  update(data) {
    console.log('tryng update');
    this.service.update(data).subscribe(() => console.log('Done !'));
  }

  updateEmail() {
    this.user = this.service.form.value;
    if (this.user.email != null) {
      console.log(this.email);
      console.log(localStorage.getItem('id'));
      this.service.findUser(localStorage.getItem('id')).subscribe(
        (user: utilisateur) => {
          user.email = this.user.email;
          this.service.update(user)
            .subscribe((cli) => {
              console.log(cli);
              this.notification.open('Update Succesful ...')._dismissAfter(3000);
              this.email = this.user.email;
              this.getConnectedUser();
              this.onClear();
              this.router.navigateByUrl('home/users');
            });
        }
      );
    } else {
      this.notification.open('Failed ...')._dismissAfter(2000);
      this.getConnectedUser();
      this.onClear();
    }

  }



  getConnectedUser() {
    this.service.findUser(localStorage.getItem('id')).subscribe(
      (user: utilisateur) => {
        this.email = user.email;
      }
    );
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

}
