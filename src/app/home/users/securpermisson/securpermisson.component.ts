import { Component, OnInit } from '@angular/core';
import { utilisateur } from 'src/app/models/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

interface Permission {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-securpermisson',
  templateUrl: './securpermisson.component.html',
  styleUrls: ['./securpermisson.component.css']
})


export class SecurpermissonComponent implements OnInit {
  permissions: Permission[] = [
    {value: 'User', viewValue: 'User'},
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'Visitor', viewValue: 'Visitor'}
  ];
  private email: string;
  constructor(private service: UtilisateurService) { }

  ngOnInit() {
    this.getConnectedUser();
  }

  getConnectedUser() {
    this.service.findUser(localStorage.getItem('id')).subscribe(
      (user: utilisateur) => {
        this.email = user.email;
      }
    );
  }

}
