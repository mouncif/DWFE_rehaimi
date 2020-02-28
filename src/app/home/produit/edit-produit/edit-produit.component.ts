import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { produit } from 'src/app/models/produit.model';
import { ProduitService } from "../../../services/produit.service";
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
  }
  constructor(private service: ProduitService, private router: Router) { }

  ngOnInit() {
  }

  onClear() {
    console.log('initialiser');
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    console.log('reached');
    console.log(this.service.form.value);
    if (this.service.form.valid) {
      this.produit = this.service.form.value;
      console.log(this.produit);
      try {
        this.service.add(this.produit).subscribe((user) => {
          console.log('Enregistrer avec succes');
          this.onClear();
        });
      } catch (err) {
        console.log(err);
      } finally {
        this.onClear();
      }
    } else {
      console.log("something went wrong");
    }

  }

}
