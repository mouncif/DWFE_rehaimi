import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { fournisseur } from 'src/app/models/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  fournisseurs :fournisseur[] = [];

  constructor(private service : FournisseurService , private router: Router, public notification: MatSnackBar) { }

  ngOnInit() {
  }

  onClear() {
    console.log('initialiser');
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  update() {
    console.log('tryng update');
    this.service.update(this.fournisseur).subscribe(() => console.log('Done !'));
  }

  onSubmit(){
    console.log('Optioooooo');
    if(this.service.form.valid){
      this.fournisseur = this.service.form.value;
      console.log(this.fournisseur);
      this.add();
      this.service.form.reset();
      this.service.initializeFormGroup();
    };
  }


  add(){
    if(this.fournisseur.id == undefined){
      console.log(this.fournisseur);
      this.service.add(this.fournisseur)
      .subscribe((user)=>{
        this.fournisseurs = [user, ...this.fournisseurs];
        this.notification.open('Added sucessful ...')._dismissAfter(5000);
      });
    }
    else{
      this.service.update(this.fournisseur)
      .subscribe((cli)=>{
        console.log(cli);
        this.notification.open('Update Succesful ...')._dismissAfter(5000);
      });
    }

  }

}
