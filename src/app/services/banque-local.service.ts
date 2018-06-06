import { Injectable } from '@angular/core';

import { Client } from '../model/client';
import {BanqueService} from './banque.service';

@Injectable()
export class BanqueLocalService implements BanqueService {

  private _clients: Client[] = [];

  constructor() {
    this.load();
  }

  private load(): void {
    this._clients = JSON.parse(localStorage.getItem('data')).clients;
  }

  private save(): void {
    localStorage.setItem('data', JSON.stringify({clients: this._clients}));
  }

  getClients(): Client[] {
    return this._clients;
  }

  getClient(id: number): Client {
    return this._clients.find(cli => cli.id === id);
  }

  addClient(client: Client): void {
    // client.id = Math.max(...this._clients.map(cli => cli.id)) + 1;
    // client.id = this._clients.reduce(function(cli1, cli2){
    //     return cli1.id > cli2.id ? cli1 : cli2;
    // }).id + 1;
    // client.id = this._clients.reduce((cli1, cli2) =>  cli1.id > cli2.id ? cli1 : cli2).id + 1;
    this._clients.push(client);
    this.save();
  }


}
