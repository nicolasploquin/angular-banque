import { Injectable } from '@angular/core';
import {BanqueService} from './banque.service';
import {HttpClient} from '@angular/common/http';
import {Client} from '../model/client';
import {BanqueAsyncService} from './banque-async.service';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class BanqueRestService implements BanqueAsyncService {

  private http: HttpClient;
  private api: string = environment.api;

  constructor(http: HttpClient) {
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
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(error => {
          console.error(`
            erreur lors de la récupération des clients à partir du serveur,
            caused by : ${error.message}
            `,error);
          return of([]);
        }) // then handle the error and return empty list
      )
      ;
  }
  addClient(client: Client): Observable<void> {
    return this.http
      .post<void>(`${this.api}/clients`, client)
      ;
  }

  getClient(id: number): Observable<Client> {
    return this.http
      .get<Client>(`${this.api}/clients/${id}`)
      ;
  }

}
