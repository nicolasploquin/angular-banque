import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {AuthModel} from './auth-model';
import {AuthGuard} from '../../components/auth/auth.guard';

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

  constructor(private authService: AuthGuard){}

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
      this.model.motdepasse = '';
      this.auth.emit(this.model.identifiant);
      this.authService.authorized = true;
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
