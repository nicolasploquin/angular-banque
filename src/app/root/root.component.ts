import { Component } from '@angular/core';

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
  username: string = 'Ben';
  showAuthForm = false;

  ajd: Date = new Date();

  connexion() {
    this.showAuthForm = !this.showAuthForm;
  }
  deconnexion() {
    this.username = '';
    this.showAuthForm = false;
  }
  authentification(user) {
    this.username = user;
    this.showAuthForm = false;
  }



  // utilisateur = 'quelqu\'un';
  //
  // recupererIdentifiant(identifiant: string) {
  //   alert(`${identifiant}, bien reçu merci`);
  // }

}
