import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-client-reactive-form',
  templateUrl: './client-reactive-form.component.html',
  styleUrls: ['./client-reactive-form.component.css']
})
export class ClientReactiveFormComponent implements OnInit {

  clientForm = new FormGroup({
    nom : new FormControl(''),
    prenom : new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  get client() {
    return this.clientForm.valueChanges;
  }

  enregistrer() {

  }
}
