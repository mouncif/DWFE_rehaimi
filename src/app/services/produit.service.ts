import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { produit } from "../models/produit.model";
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url = "http://localhost:3000/Produit";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomProduit: new FormControl('', [Validators.required]),
    nomCourtProduit: new FormControl('', [Validators.required]),
    prixBase: new FormControl('', [Validators.required]),
    prixVente: new FormControl('', [Validators.required]),
    seuilMaxRemise: new FormControl('', [Validators.required]),
    uniteProduit: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    quantiteInitialStock: new FormControl('', [Validators.required]),
    quantiteActuelStock: new FormControl('', [Validators.required])

  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomProduit: '',
      nomCourtProduit: '',
      prixBase: '',
      prixVente: '',
      seuilMaxRemise: '',
      uniteProduit: '',
      image: '',
      quantiteInitialStock: null,
      quantiteActuelStock: null
    });
  }
  findAll() {
    return this.http.get<produit[]>(this.url);
  }
  add(user) {
    return this.http.post<produit>(this.url, user);
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
    return this.http.get<produit>(this.url);
  }


}
