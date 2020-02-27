import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { produit } from '../../models/produit.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  private prod: produit;
  constructor(private service: ProduitService, private router: Router) { }

  ngOnInit() {
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  onSubmit() {
    console.log('Optioooooo');

  }

}
