import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProfileComponent } from "../profile/profile.component";
import { ListUsersComponent } from '../list-users/list-users.component';


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
