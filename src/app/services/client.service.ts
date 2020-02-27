import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { client } from "../models/client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = "http://localhost:3000/Client";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomClient: new FormControl('', Validators.required),
    prenomClient: new FormControl('', Validators.required),
    statutClient: new FormControl('', Validators.required),
    photoClient: new FormControl(''),
    telClient: new FormControl('', [Validators.required, Validators.minLength(8)]),
    emailClient: new FormControl('', Validators.email),
    adressClient: new FormControl('', Validators.required),
    villeClient: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomClient: '',
      prenomClient: '',
      statutClient: '',
      photoClient: '',
      telClient: '',
      emailClient: '',
      adressClient: '',
      villeClient: '',
    });
  }


  findAll() {
    return this.http.get<client[]>(this.url);
  }
  add(cli) {
    return this.http.post<client>(this.url, cli);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  update(cli) {
    return this.http.put(`${this.url}/${cli.id}`, cli);
  }

  populateform(row) {
    this.form.setValue(row);
  }

  getAll() {
    return this.http.get<client>(this.url);
  }
}
