import {Compte} from './compte';

export class Client {

  id: number;
  nom: string = '';
  prenom: string = '';

  comptes: Compte[] = [];

  constructor() {
  }

}
