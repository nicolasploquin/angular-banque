import { Injectable } from '@angular/core';
import {BanqueService} from './banque.service';
import {HttpClient} from '@angular/common/http';
import {Client} from '../model/client';
import {environment} from '../../environments/environment';
import {BanqueAsyncService} from './banque-async.service';

@Injectable()
export class BanqueRestService implements BanqueAsyncService {

  private http: HttpClient;
  private api: string = environment.api;

  constructor(http: HttpClient) {
    this.http = http;
  }

  // ES6 : Promise
  getClients(): Promise<Client[]> {
    // let clients: Client[] = [];
    return new Promise<Client[]>((resolve, reject) => {
      this.http.get<Client[]>(`${this.api}/clients`)
        .subscribe( data => resolve(data) );
    });
  }
  // getClients(): Observable<Client[]> {
  //   return this.http.get<Client[]>(`${this.api}/clients`);
  // }
  addClient(client: Client): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.post(`${this.api}/clients/post`, client).subscribe(res => resolve(), err => {});
    });
  }

  getClient(id: number): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      this.http.get<Client>(`${this.api}/clients/${id}`)
        .subscribe( data => resolve(data) );
    });
  }

}
