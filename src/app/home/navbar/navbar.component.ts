import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../authentification/login/login.component';
import { ProfileComponent } from '../users/profile/profile.component';
import { UtilisateurService } from '../../services/utilisateur.service';
import { utilisateur } from '../../models/utilisateur.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private email: string;
  constructor(private dialog: MatDialog,  private service: UtilisateurService, private router: Router) { }

  ngOnInit() {
    this.getConnectedUser();
  }

  onClick(){
    const dialConfig = new MatDialogConfig();
    dialConfig.disableClose = false;
    dialConfig.autoFocus = true;
    dialConfig.width = '80%';
    dialConfig.height = '55%';
    this.dialog.open(ProfileComponent, dialConfig).afterClosed().subscribe();
  }

  getConnectedUser(){
    this.service.findUser(localStorage.getItem('id')).subscribe(
      (user: utilisateur) => {
        this.email = user.email;
      }
    );
  }

  disconnect(){
    this.router.navigateByUrl('/auth');
  }

}
