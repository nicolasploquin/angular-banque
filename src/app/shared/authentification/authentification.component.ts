import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {AuthModel} from './auth-model';
import {AuthGuard} from '../../auth/auth.guard';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit, OnChanges {

  @Input()
  identifiant: string;

  @Output()
  auth: EventEmitter<string> = new EventEmitter<string>();

  model: AuthModel;

  ngOnInit() {}
  ngOnChanges() {
    this.model = {
      identifiant: this.identifiant,
      motdepasse: ''
    };
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
