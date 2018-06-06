import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Client} from '../model/client';
import {FormControl, Validators} from '@angular/forms';
import {BanqueService} from '../services/banque.service';
import {BanqueRestService} from '../services/banque-rest.service';
import {BanqueAsyncService} from '../services/banque-async.service';
import {BanqueLocalAsyncService} from '../services/banque-local-async.service';
import {BanqueLocalService} from '../services/banque-local.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit, AfterViewInit {

  private dataService: BanqueAsyncService;

  // clients: Array;
  // clients: Object[];
  // clients: Array<Client>;
  clients: Client[] = [];

  client: Client;

  nommd = new FormControl('', [Validators.required, Validators.email]);

  constructor(dataService: BanqueRestService) {
    this.dataService = dataService;
    this.clients = [];
  }


  ngOnInit() {
    console.log('clients onInit()');
    this.dataService.getClients().then( data => this.clients = data );
  }

  // Rechargement de la liste à chaque affichage du  composant
  ngAfterViewInit() {
    console.log('clients onAfterViewInit()');
  }

}
