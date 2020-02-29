import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { LoginComponent } from 'src/app/authentification/login/login.component';
import { ProfileComponent } from "../profile/profile.component";
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { ListUsersComponent } from '../list-users/list-users.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  private foo: ListUsersComponent;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onClick() {
    const dialConfig = new MatDialogConfig();
    dialConfig.disableClose = false;
    dialConfig.autoFocus = true;
    dialConfig.width = '60%';
    //this.dialog.open(ProfileComponent, dialConfig).afterClosed().subscribe(data => this.fetchElements());
    this.dialog.open(ProfileComponent, dialConfig).afterClosed().subscribe((data) => this.foo.fetchElements());
  }

}
