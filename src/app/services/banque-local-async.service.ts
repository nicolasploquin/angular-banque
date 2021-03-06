import { Injectable } from '@angular/core';

import { Client } from '../model/client';
import { BanqueAsyncService } from './banque-async.service';
import { Observable, of, EMPTY } from 'rxjs';

@Injectable()
export class BanqueLocalAsyncService implements BanqueAsyncService {

  private _clients: Client[] = [];

  constructor() {
    this.load();
  }

  private load(): void {
    const data = JSON.parse(localStorage.getItem('data'));
    this._clients = data?data.clients:[];
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

  getClient(id: number): Observable<Client> {
    return of(this._clients.find(cli => cli.id === id));
  }

  addClient(client: Client): Observable<void> {
    // client.id = Math.max(...this._clients.map(cli => cli.id)) + 1;
    // client.id = this._clients.reduce(function(cli1, cli2){
    //     return cli1.id > cli2.id ? cli1 : cli2;
    // }).id + 1;
    if (!client.id) {
      client.id = this._clients.reduce((cli1, cli2) =>  cli1.id > cli2.id ? cli1 : cli2).id + 1;
    }
    this._clients.push(client);
    this.save();

    return of(null);
  }


}
