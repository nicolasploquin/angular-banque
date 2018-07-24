import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Client} from '../model/client';
import {BanqueAsyncService} from '../services/banque-async.service';

export interface BanqueStateModel {
  clients: Client[];
}

export class LoadClients {
  static readonly type = '[Banque] Rechargement clients';
}

export class AddClient {
  static readonly type = '[Banque] Nouveau client';
  constructor(public client: Client) {
    console.log('constructor AddClient');
  }
}

@State<BanqueStateModel>({
  name: 'banque',
  defaults: {
    clients: []
  }
})
export class BanqueState {

  @Selector()
  static clients(state: BanqueStateModel) {
    console.log('selector clients');
    return state.clients;
  }

  constructor(private data: BanqueAsyncService) {
    console.log('constructor BanqueState');
  }

  @Action(LoadClients)
  loadClients(context: StateContext<BanqueStateModel>) {
    console.log('@Action AddClient');
    const state = context.getState();
    this.data.getClients().subscribe(
      clients => context.setState({
        ...state,
        clients: clients
      })
    );
  }

  @Action(AddClient)
  addClient(
    context: StateContext<BanqueStateModel>,
    action: AddClient
  ) {
    console.log('@Action AddClient');
    const state = context.getState();
    this.data.addClient(action.client).subscribe(
      () => context.setState({
        ...state,
        clients: [
          ...state.clients,
          action.client
        ]
      })
    );
  }

}




