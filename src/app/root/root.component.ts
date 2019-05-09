import { Component } from '@angular/core';
import {AuthGuard} from '../auth/auth.guard';

@Component({
  selector: 'app-root', // <app-root ></app-root>
  templateUrl: './root.component.html',
  // template: `
  //   <h1>Mon application {{title}}</h1>
  //   <p></p>
  // `,
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  username: string = 'nicolas';
  showAuthForm = false;

  ajd: Date = new Date();

  constructor(
    private guard: AuthGuard
  ) { }

  connexion() {
    this.showAuthForm = !this.showAuthForm;
  }
  deconnexion() {
    this.guard.authorized = false;
    // this.username = '';
    this.showAuthForm = false;
  }
  authentification(user) {
    this.guard.authorized = true;
    this.username = user;
    this.showAuthForm = false;
  }

  get authenticated(): boolean {
    return this.guard.authorized;
  }


  // utilisateur = 'quelqu\'un';
  //
  // recupererIdentifiant(identifiant: string) {
  //   alert(`${identifiant}, bien reçu merci`);
  // }

}
