import { Injectable } from '@angular/core';

import { Client } from '../model/client';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BanqueHttpService {

  private url: string = 'https://core-webapi.azurewebsites.net/api';

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getClients(): Observable<Client[]> {

    return this.httpClient
      .get<Client[]>(`${this.url}/clients`)
      // .pipe(
      //   retry(3), // 3 tentatives
      //   catchError( error => error.error.message)
      // )
      ;
  }

  getClient(id: number): Observable<Client> {
    return this.httpClient
      .get<Client>(
        'http://wildfly.westeurope.cloudapp.azure.com/clients/' + id
      );
  }

  addClient(client: Client): Observable<Client[]> {

    const options = {
      headers : new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const params = `nom=${client.nom}&prenom=${client.prenom}`;

    return this.httpClient
      .post<Client[]>(
        'http://wildfly.westeurope.cloudapp.azure.com/clients/post',
        params,
        options
      );

  }


}
