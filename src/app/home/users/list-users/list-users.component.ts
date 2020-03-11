import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialogConfig } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { utilisateur } from 'src/app/models/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { EditUsersComponent } from '../edit-users/edit-users.component';
import { SecurpermissonComponent } from '../securpermisson/securpermisson.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  utilisateurs: utilisateur[] = [];
  utilisateur: utilisateur;
  listData = new MatTableDataSource<utilisateur>();
  displayedColumns: string[] = ['profils', 'dateCreation', 'dateFin', 'email', 'photo', 'actions'];


  constructor(private service: UtilisateurService, private router: Router, public notification: MatSnackBar, private dialog: MatDialog) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.service.findAll().subscribe(
      res => {
        if (!res) return;
        console.log(res);
        this.listData = new MatTableDataSource(res as any);
        this.listData.paginator = this.paginator;
      }
    )
  };

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }

  onEdit(row) {
    this.service.populateform(row);
    //this.service.form['oldidentifiant']= 'nonenone';
    const dialConfig = new MatDialogConfig();
    dialConfig.disableClose = false;
    dialConfig.autoFocus = true;
    dialConfig.width = '50%';
    dialConfig.height = '60%';
    this.dialog.open(SecurpermissonComponent, dialConfig).afterClosed().subscribe((data) => this.fetchElements());

  }

  onDelete(id) {
    if (confirm('Are sure?')) {
      this.delete(id);
    }
  }


  delete(id) {
    this.service.delete(id).subscribe(() => {
      this.utilisateurs = this.utilisateurs.filter(data => data.id != id);
      console.log(this.utilisateurs);
      // this.notification.openSnackBar("Success Delete...!");
      this.notification.open('Succes Delete ...')._dismissAfter(5000);
      this.fetchElements();
    });
  }



}
