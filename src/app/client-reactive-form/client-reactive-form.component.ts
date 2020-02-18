import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {defaultIfEmpty, map} from 'rxjs/operators';
// import {AddClient} from '../store/banque.state';
import {BanqueAsyncService} from '../services/banque-async.service';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-client-reactive-form',
  templateUrl: './client-reactive-form.component.html',
  styleUrls: ['./client-reactive-form.component.css']
})
export class ClientReactiveFormComponent implements OnInit {

  clientStatic = {};

  clientForm = new FormGroup({
    nom : new FormControl('', Validators.required),
    prenom : new FormControl('Marie'),
    comptes: new FormArray([])
  });
  tel = new FormControl('');

  // private compteFormGroup = {
  //   numero: [''],
  //   intitule: ['']
  // };
  // clientForm = this.builder.group({
  //   nom : ['',Validators.required],
  //   prenom : ['Marie'],
  //   comptes: this.builder.array([
  //     this.builder.group(this.compteFormGroup)
  //   ])
  // });


  constructor(
    // private builder: FormBuilder,
    @Inject('BanqueAsyncService')
    private dataService: BanqueAsyncService,
    private router: Router
//    private banque: Store
  ) { }

  ngOnInit() {
    // initialisation d'un champ
    // this.clientForm.get('nom').setValue('Martin');

    // this.clientForm.addControl('telephone', this.tel);


    this.clientForm.patchValue({
      nom: 'Dupont'
    });

    this.addCompte();
  }

  get client() {
    return this.clientForm.valueChanges; //.pipe(map(val => val?val:this.clientForm.value));
  }

  get comptes() {
    return this.clientForm.get('comptes') as FormArray;
  }

  addCompte() {

    this.comptes.push(new FormGroup({
      numero : new FormControl(''),
      intitule : new FormControl('')
    }));

    // this.comptes.push(this.builder.group(this.compteFormGroup));
  }

  valider() {
    this.clientStatic = this.clientForm.value;
  }
  enregistrer() {
    this.dataService.addClient(this.clientForm.value);
//    this.banque.dispatch(new AddClient(this.clientForm.value));
    this.router.navigate(['/clients']);
  }


}
