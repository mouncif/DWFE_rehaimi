import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { utilisateur } from '../../models/utilisateur.model';
import { UtilisateurService } from "../../services/utilisateur.service";
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: utilisateur = {
    profils: '',
    dateCreation: '',
    dateFin: '',
    photo: '',
    email: '',
    identifiant: ''
  };
  private myDate : string ;

  constructor(private service: UtilisateurService, private router: Router ) {
    this.myDate = formatDate(new Date(), 'yyyy/MM/dd', 'en').toLocaleString();
   }

  ngOnInit() {
    this.onClear();
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.user = this.service.form.value;
      this.user.dateCreation= this.myDate;
      console.log(this.user);
      try {
        this.service.add(this.user).subscribe((user) => {
          console.log('Enregistrer avec succes');
          this.router.navigateByUrl('login');
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

  onClear() {
    console.log('initialiser');
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
