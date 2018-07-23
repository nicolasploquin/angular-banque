import {Client} from '../model/client';
import {Observable} from 'rxjs';

export abstract class BanqueAsyncService {
  abstract getClients(): Observable<Client[]> ;
  abstract getClient(id: number): Observable<Client> ;
  abstract addClient(client: Client): Observable<void> ;
}
