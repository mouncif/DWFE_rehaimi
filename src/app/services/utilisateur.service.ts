import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { utilisateur } from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private url = "http://localhost:3000/Utilisateur"
  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    profils: new FormControl(''),
    dateCreation: new FormControl(''),
    dateFin: new FormControl(''),
    photo: new FormControl(''),
    email: new FormControl('', Validators.email),
    identifiant: new FormControl('', [Validators.required, Validators.minLength(8)]),

  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      profils: '',
      dateCreation: '',
      dateFin: '',
      photo: '',
      email: '',
      identifiant: ''
    });
  }

  findAll() {
    return this.http.get<utilisateur[]>(this.url);
  }
  add(user) {
    return this.http.post<utilisateur>(this.url, user);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  update(user) {
    return this.http.put(`${this.url}/${user.id}`, user);
  }

  populateform(row) {
    this.form.setValue(row);
  }

  getAll() {
    return this.http.get<utilisateur>(this.url);
  }


}
