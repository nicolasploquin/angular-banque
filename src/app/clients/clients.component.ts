import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Client} from '../model/client';
import {FormControl, Validators} from '@angular/forms';
import {BanqueAsyncService} from '../services/banque-async.service';
import {BanqueRestService} from '../services/banque-rest.service';

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

  constructor(dataService: BanqueAsyncService) {
    this.dataService = dataService;
    this.clients = [];
  }

  ngOnInit() {
    console.log('clients onInit()');
    this.dataService.getClients().subscribe( data => this.clients = data );
  }

  // Rechargement de la liste à chaque affichage du  composant
  ngAfterViewInit() {
    console.log('clients onAfterViewInit()');
  }

}
