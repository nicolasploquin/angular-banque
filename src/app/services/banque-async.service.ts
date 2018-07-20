import {Client} from '../model/client';
import {Observable} from 'rxjs';

export interface BanqueAsyncService {
  getClients(): Observable<Client[]> ;
  getClient(id: number): Promise<Client> ;
  addClient(client: Client): Promise<void> ;
}
