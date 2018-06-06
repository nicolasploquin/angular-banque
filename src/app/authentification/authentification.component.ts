import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthModel} from './auth-model';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  @Input()
  identifiant: string;

  @Output()
  auth: EventEmitter<string> = new EventEmitter<string>();

  model: AuthModel;

  constructor() { }

  ngOnInit() {
    this.model = new AuthModel(this.identifiant, '');
  }
  onSubmit() {
    if (this.model.identifiant !== ''
      && this.model.identifiant === this.model.motdepasse) {
      this.auth.emit(this.model.identifiant);
    }
  }

//   @Input()
//   identifiant = 'inconnu';
//
//   @Output()
//   identifiantChange: EventEmitter<string> = new EventEmitter<string>();
//
//   constructor() { }
//
//   action() {
// //    alert(`clic sur ${this.identifiant}`);
//     this.identifiant += ' clic';
//     this.identifiantChange.emit(this.identifiant);
//   }
//
//   ngOnInit() {
//   }

}
