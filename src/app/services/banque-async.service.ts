import {Client} from '../model/client';
import {Observable} from 'rxjs';

export interface BanqueAsyncService {
  getClients(): Observable<Client[]> ;
  getClient(id: number): Observable<Client> ;
  addClient(client: Client): Observable<void> ;
}
