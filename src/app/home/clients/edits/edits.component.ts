import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { client } from '../../../models/client.model';
import { ClientService } from "../../../services/client.service";
import { MatSnackBar } from '@angular/material/snack-bar';

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
  clients :client[] = [];
  constructor(private service: ClientService, private router: Router, public notification: MatSnackBar) { }

  ngOnInit() {
  }

  onClear() {
    console.log('initialiser');
    this.service.form.reset();
    this.service.initializeFormGroup();
  }



  update() {
    console.log('tryng update');
    this.service.update(this.client).subscribe(() => console.log('Done !'));
  }






  onSubmit(){
    console.log('Optioooooo');
    if(this.service.form.valid){
      this.client = this.service.form.value;
      console.log(this.client);
      this.add();
      this.service.form.reset();
      this.service.initializeFormGroup();
    };
  }

  add(){
    if(this.client.id == undefined){
      console.log(this.client);
      this.service.add(this.client)
      .subscribe((user)=>{
        this.clients = [user, ...this.clients];
        this.notification.open('Added sucessful ...')._dismissAfter(5000);
      });
    }
    else{
      this.service.update(this.client)
      .subscribe((cli)=>{
        console.log(cli);
        this.notification.open('Update Succesful ...')._dismissAfter(5000);
      });
    }

  }




}
