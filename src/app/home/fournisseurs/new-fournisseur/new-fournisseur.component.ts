import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { fournisseur } from 'src/app/models/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-new-fournisseur',
  templateUrl: './new-fournisseur.component.html',
  styleUrls: ['./new-fournisseur.component.css']
})
export class NewFournisseurComponent implements OnInit {

  private fournisseur: fournisseur = {
    nomFournisseur: '',
    nomCourtFournisseur: '',
    villeFournisseur: '',
    adressFournisseur: '',
    telFixFournisseur: '',
    telMobileFournisseur: '',
    faxFournisseur: '',
    adressEmailFournisseur: '',
  };
  constructor(private service : FournisseurService , private router: Router) { }

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
      this.fournisseur = this.service.form.value;
      console.log(this.fournisseur);
      try {
        this.service.add(this.fournisseur).subscribe((user) => {
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
