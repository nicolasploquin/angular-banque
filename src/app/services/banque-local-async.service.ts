import { Injectable } from '@angular/core';

import { Client } from '../model/client';
import {BanqueService} from './banque.service';
import {BanqueAsyncService} from './banque-async.service';
import {Observable, of} from 'rxjs';

@Injectable()
export class BanqueLocalAsyncService implements BanqueAsyncService {

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

  // ES6 Promise
  // getClients(): Promise<Client[]> {
  //   return Promise.resolve(this._clients);
  // }
  getClients(): Observable<Client[]> {
    return of(this._clients);
  }

  getClient(id: number): Promise<Client> {
    return Promise.resolve(this._clients.find(cli => cli.id === id));
  }

  addClient(client: Client): Promise<void> {
    // client.id = Math.max(...this._clients.map(cli => cli.id)) + 1;
    // client.id = this._clients.reduce(function(cli1, cli2){
    //     return cli1.id > cli2.id ? cli1 : cli2;
    // }).id + 1;
    // client.id = this._clients.reduce((cli1, cli2) =>  cli1.id > cli2.id ? cli1 : cli2).id + 1;
    this._clients.push(client);
    this.save();

    return Promise.resolve();
  }


}
