import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../model/client';
import {BanqueHttpService} from '../services/banque-http.service';
import {BanqueAsyncService} from '../services/banque-async.service';
import {BanqueRestService} from '../services/banque-rest.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  private route: ActivatedRoute;
  private dataService: BanqueAsyncService;

  client: Client = new Client();

  constructor(dataService: BanqueAsyncService, route: ActivatedRoute) {
    this.dataService = dataService;
    this.route = route;
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.params['id'], 10);
    this.dataService.getClient(id)
      .subscribe( client => this.client = client );
    // this.client = this.dataService.getClient(id);
  }

}
