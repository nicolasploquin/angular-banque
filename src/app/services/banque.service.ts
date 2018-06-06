import {Client} from '../model/client';

export interface BanqueService {
  getClients(): Client[] ;
  getClient(id: number): Client ;
  addClient(client: Client): void ;
}
