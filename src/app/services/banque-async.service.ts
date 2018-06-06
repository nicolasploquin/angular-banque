import {Client} from '../model/client';

export interface BanqueAsyncService {
  getClients(): Promise<Client[]> ;
  getClient(id: number): Promise<Client> ;
  addClient(client: Client): Promise<void> ;
}
