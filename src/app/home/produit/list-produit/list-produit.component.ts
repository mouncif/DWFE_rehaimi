import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { produit } from 'src/app/models/produit.model';
import { ProduitService } from "../../../services/produit.service";
import { MatTableDataSource, MatDialogConfig } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { EditProduitComponent } from '../edit-produit/edit-produit.component';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  produit: produit;
  products: produit[];
  listData = new MatTableDataSource<produit>();
  displayedColumns: string[] = ['nomProduit', 'nomCourtProduit', 'prixBase', 'prixVente', 'seuilMaxRemise', 'uniteProduit', 'quantiteInitialStock', 'quantiteActuelStock', 'actions'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private produitService: ProduitService, private router: Router, public notification: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.produitService.findAll().subscribe(
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
    this.produitService.populateform(row);
    const dialConfig = new MatDialogConfig();
    dialConfig.disableClose = false;
    dialConfig.autoFocus = true;
    dialConfig.width = '80%';
    dialConfig.height = '80%';
    this.dialog.open(EditProduitComponent, dialConfig).afterClosed().subscribe(data => this.fetchElements());

  }

  onDelete(id) {
    if (confirm('Are sure?')) {
      this.delete(id);
    }
  }

  delete(id) {
    this.produitService.delete(id).subscribe(() => {
      this.products = this.products.filter(user => user.id != id);
      console.log(this.products);
      this.fetchElements();
      //this.notification.openSnackBar("Success Delete...!");
      this.notification.open('Succes Delete ...');
      this.fetchElements();
    });
  }


}
