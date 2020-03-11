import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { produit } from '../../../models/produit.model';
import { ProduitService } from "../../../services/produit.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  private produit: produit = {
    nomProduit: '',
    nomCourtProduit: '',
    prixBase: '',
    prixVente: '',
    seuilMaxRemise: '',
    uniteProduit: '',
    image: '',
    quantiteInitialStock: null,
    quantiteActuelStock: null
  };
  produits: produit[] = [];
  constructor(private service: ProduitService, private router: Router, public notification: MatSnackBar) { }

  ngOnInit() {
  }

  onClear() {
    console.log('initialiser');
    this.service.form.reset();
    this.service.initializeFormGroup();
  }


  update() {
    console.log('tryng update');
    this.service.update(this.produit).subscribe(() => console.log('Done !'));
  }


  onSubmit() {
    console.log('Optioooooo');
    if (this.service.form.valid) {
      this.produit = this.service.form.value;
      console.log(this.produit);
      this.add();
      this.service.form.reset();
      this.service.initializeFormGroup();
    };
  }


  add() {
    if (this.produit.id == undefined) {
      console.log(this.produit);
      this.service.add(this.produit)
        .subscribe((user) => {
          this.produits = [user, ...this.produits];
          this.notification.open('Added sucessful ...')._dismissAfter(5000);
        });
    }
    else {
      this.service.update(this.produit)
        .subscribe((cli) => {
          console.log(cli);
          this.notification.open('Update Succesful ...')._dismissAfter(5000);
        });
    }
  }
}
