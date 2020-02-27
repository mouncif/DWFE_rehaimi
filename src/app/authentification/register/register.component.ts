import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { utilisateur } from '../../models/utilisateur.model';
import { UtilisateurService } from "../../services/utilisateur.service";

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
  constructor(private service: UtilisateurService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.user = this.service.form.value;
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
