import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {Client} from '../../model/client';
import {FormControl, Validators} from '@angular/forms';
import {BanqueAsyncService} from '../../services/banque-async.service';
import {BanqueRestService} from '../../services/banque-rest.service';
// import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
// import {BanqueState, LoadClients} from '../store/banque.state';
import {BanqueService} from '../../services/banque.service';
import { map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit, AfterViewInit {

  // private banque: Store;
  private dataService: BanqueAsyncService;

  // clients: Array;
  // clients: Object[];
  // clients: Array<Client>;

  // @Select(BanqueState.clients)
  clients$: Observable<Client[]>;

  client: Client;


  constructor(
    // banque: Store,
    @Inject('BanqueAsyncService') dataService: BanqueAsyncService
  ) {
    // this.banque = banque;
    this.dataService = dataService;
    // this.clients = [];
  }

  ngOnInit() {
    console.log('clients onInit()');
    // this.banque.dispatch(new LoadClients());
    this.clients$ = this.dataService.getClients();                         // BanqueLocalService
    // let mapClient = map( (data: Client[]) => data.map(cli => new Client(cli)) );
    // mapClient(this.dataService.getClients()).subscribe( data => this.clients = data );  // BanqueHttpService

    // this.dataService.getClients()
    //   .pipe(
    //     retry(3),
    //     map( (data: Client[]) => data.map(cli => new Client(cli)) )
    //   )
    //   .subscribe( data => this.clients = data );
  }

  // Rechargement de la liste à chaque affichage du  composant
  ngAfterViewInit() {
    console.log('clients onAfterViewInit()');
  }

}
