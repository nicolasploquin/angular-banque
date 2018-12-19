import { Injectable } from '@angular/core';
import {BanqueService} from './banque.service';
import {HttpClient} from '@angular/common/http';
import {Client} from '../model/client';
import {BanqueAsyncService} from './banque-async.service';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class BanqueRestService extends BanqueAsyncService {

  private http: HttpClient;
  private api = environment.api;

  constructor(http: HttpClient) {
    super();
    this.http = http;
  }

  // ES6 : Promise
  // getClients(): Promise<Client[]> {
  //   // let clients: Client[] = [];
  //   return new Promise<Client[]>((resolve, reject) => {
  //     this.http.get<Client[]>(`${this.api}/clients`)
  //       .subscribe( data => resolve(data) );
  //   });
  // }
  getClients(): Observable<Client[]> {
    return this.http
      .get<Client[]>(`${this.api}/clients`)
      ;
  }
  addClient(client: Client): Observable<void> {
    return this.http
      .post<void>(`${this.api}/clients/post`, client)
      ;
  }

  getClient(id: number): Observable<Client> {
    return this.http
      .get<Client>(`${this.api}/clients/${id}`)
      ;
  }

}
