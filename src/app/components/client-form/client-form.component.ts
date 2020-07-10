import {Component, Inject, OnInit} from '@angular/core';
import { Client } from '../../model/client';
import { Router } from '@angular/router';
import { BanqueHttpService } from '../../services/banque-http.service';
import {BanqueAsyncService} from '../../services/banque-async.service';
import {BanqueRestService} from '../../services/banque-rest.service';
import {Store} from '@ngxs/store';
// import {AddClient} from '../store/banque.state';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  private router: Router;
  private dataService: BanqueAsyncService;
  private banque: Store;

  client = new Client();

  constructor(
    @Inject('BanqueAsyncService') dataService: BanqueAsyncService,
    router: Router
    // banque: Store
  ) {
    this.dataService = dataService;
    this.router = router;
    // this.banque = banque;
  }

  enregistrer() {
    // NGXS
    // this.banque.dispatch(new AddClient(this.client));
    // this.router.navigate(['/clients']);

    this.dataService.addClient(this.client).subscribe(
      () => this.router.navigate(['/clients'])
    );
    // this.router.navigate(['/clients']);
  }

  ngOnInit() {

  }

}
