import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { Router } from '@angular/router';
import { BanqueHttpService } from '../services/banque-http.service';
import {BanqueAsyncService} from '../services/banque-async.service';
import {BanqueRestService} from '../services/banque-rest.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  private router: Router;
  private dataService: BanqueAsyncService;

  client = new Client();

  constructor(dataService: BanqueRestService, router: Router) {
    this.dataService = dataService;
    this.router = router;
  }

  enregistrer() {
    this.dataService.addClient(this.client).then(
      () => this.router.navigate(['/clients'])
      // () => this.router.navigate([ROUTE_LISTE_CLIENTS])
    );
    // this.router.navigate(['/clients']);
  }

  ngOnInit() {

  }

}
