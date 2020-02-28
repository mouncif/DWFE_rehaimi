import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { fournisseur } from 'src/app/models/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { MatTableDataSource, MatDialogConfig } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { NewFournisseurComponent } from "../new-fournisseur/new-fournisseur.component";
@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {
  fournisseur: fournisseur;
  fournisseurs: fournisseur[];
  listData = new MatTableDataSource<fournisseur>();
  displayedColumns: string[] = ['nomFournisseur', 'nomCourtFournisseur', 'villeFournisseur', 'adressFournisseur', 'telFixFournisseur', 'telMobileFournisseur', 'faxFournisseur', 'adressEmailFournisseur', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private service: FournisseurService, private router: Router, public notification: MatSnackBar, private dialog: MatDialog) { }

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
    const dialConfig = new MatDialogConfig();
    dialConfig.disableClose = false;
    dialConfig.autoFocus = true;
    dialConfig.width = '80%';
    dialConfig.height = '80%';
    this.dialog.open( NewFournisseurComponent, dialConfig).afterClosed().subscribe(data => this.fetchElements());

  }

  onDelete(id) {
    if (confirm('Are sure?')) {
      this.delete(id);
    }
  }

  delete(id) {
    this.service.delete(id).subscribe(() => {
      this.fournisseurs = this.fournisseurs.filter(user => user.id != id);
      console.log(this.fournisseurs);
      this.fetchElements();
      //this.notification.openSnackBar("Success Delete...!");
      this.notification.open('Succes Delete ...');
      this.fetchElements();
    });
  }

}
