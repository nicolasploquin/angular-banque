import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {defaultIfEmpty, map} from 'rxjs/operators';
import {AddClient} from '../store/banque.state';
import {BanqueAsyncService} from '../services/banque-async.service';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-client-reactive-form',
  templateUrl: './client-reactive-form.component.html',
  styleUrls: ['./client-reactive-form.component.css']
})
export class ClientReactiveFormComponent implements OnInit {

  log = {};

  private compteFormGroup = {
    numero: [''],
    intitule: ['']
  };

  // clientForm = new FormGroup({
  //   nom : new FormControl(''),
  //   prenom : new FormControl('')
  // });
  clientForm = this.builder.group({
    nom : ['',Validators.required],
    prenom : [''],
    comptes: this.builder.array([
      this.builder.group(this.compteFormGroup)
    ])
  });


  constructor(
    private builder: FormBuilder,
    private dataService: BanqueAsyncService,
    private router: Router,
    private banque: Store
  ) { }

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

  get comptes() {
    return this.clientForm.get('comptes') as FormArray;
  }

  addCompte() {
    this.comptes.push(this.builder.group(this.compteFormGroup));
  }

  valider() {
    this.log = this.clientForm.value;
  }
  enregistrer() {
    this.banque.dispatch(new AddClient(this.clientForm.value));
    this.router.navigate(['/clients']);
  }


}
