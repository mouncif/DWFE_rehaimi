import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/authentification/login/login.component';
import { ProfileComponent } from '../users/profile/profile.component';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { utilisateur } from 'src/app/models/utilisateur.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private email: string;
  constructor(private dialog: MatDialog,  private service: UtilisateurService) { }

  ngOnInit() {
    this.getConnectedUser();
  }

  onClick(){
    const dialConfig = new MatDialogConfig();
    dialConfig.disableClose = false;
    dialConfig.autoFocus = true;
    dialConfig.width = '80%';
    dialConfig.height = '80%';
    this.dialog.open(ProfileComponent, dialConfig).afterClosed().subscribe();
  }

  getConnectedUser(){
    this.service.findUser(localStorage.getItem('id')).subscribe(
      (user: utilisateur) => {
        this.email = user.email;
      }
    );
  }

}
