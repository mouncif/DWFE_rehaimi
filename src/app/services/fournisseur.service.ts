import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fournisseur } from "../models/fournisseur.model";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private url = "http://localhost:3000/Fournisseurt";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomFournisseur: new FormControl('', Validators.required),
    nomCourtFournisseur: new FormControl('', Validators.required),
    villeFournisseur: new FormControl('', Validators.required),
    adressFournisseur: new FormControl('', [Validators.minLength(8)]),
    telFixFournisseur: new FormControl('', [Validators.required, Validators.minLength(8)]),
    telMobileFournisseur: new FormControl('', [Validators.required, Validators.minLength(8)]),
    faxFournisseur: new FormControl('', [Validators.required, Validators.minLength(8)]),
    adressEmailFournisseur: new FormControl('', Validators.email),
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomFournisseur: '',
      nomCourtFournisseur: '',
      villeFournisseur: '',
      adressFournisseur: '',
      telFixFournisseur: '',
      telMobileFournisseur: '',
      faxFournisseur: '',
      adressEmailFournisseur: '',
    });
  }

  findAll() {
    return this.http.get<fournisseur[]>(this.url);
  }
  add(user) {
    return this.http.post<fournisseur>(this.url, user);
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
    return this.http.get<fournisseur>(this.url);
  }







}
