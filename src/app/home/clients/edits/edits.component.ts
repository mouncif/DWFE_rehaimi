import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { client } from '../../../models/client.model';
import { ClientService } from "../../../services/client.service";

@Component({
  selector: 'app-edits',
  templateUrl: './edits.component.html',
  styleUrls: ['./edits.component.css']
})
export class EditsComponent implements OnInit {
  private client: client = {
    nomClient: '',
    prenomClient: '',
    statutClient: '',
    photoClient: '',
    telClient: '',
    emailClient: '',
    adressClient: '',
    villeClient: '',
    abonnement: '',
    dateDebut: '',
    dateFin: '',
  };
  constructor(private service: ClientService, private router: Router) { }

  ngOnInit() {
  }

  onClear() {
    console.log('initialiser');
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.client = this.service.form.value;
      console.log(this.client);
      try {
        this.service.add(this.client).subscribe((user) => {
          console.log('Enregistrer avec succes');
          this.onClear();
          this.service.form.reset();
        });
      } catch (err) {
        console.log(err);
      } finally {
        this.onClear();
      }
    } else {
      console.log(this.client);
      this.update();
      this.service.form.reset();
    }

  }

  update() {
    this.service.update(this.client).subscribe();
  }



}
