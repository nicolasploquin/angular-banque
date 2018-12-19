import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {defaultIfEmpty, map} from 'rxjs/operators';

@Component({
  selector: 'app-client-reactive-form',
  templateUrl: './client-reactive-form.component.html',
  styleUrls: ['./client-reactive-form.component.css']
})
export class ClientReactiveFormComponent implements OnInit {

  log = {};

  clientForm = new FormGroup({
    nom : new FormControl(''),
    prenom : new FormControl('')
  });

  constructor() { }

  ngOnInit() {
    // initialisation d'un champ
    // this.clientForm.get('nom').setValue('Martin');
    this.clientForm.patchValue({
      nom: 'Dupont'
    });
  }

  get client() {
    return this.clientForm.valueChanges; //.pipe(map(val => val?val:this.clientForm.value));
  }

  enregistrer() {
    this.log = this.clientForm.value;
  }
}
