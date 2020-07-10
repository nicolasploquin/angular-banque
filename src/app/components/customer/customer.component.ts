import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../../model/client';
import {BanqueAsyncService} from '../../services/banque-async.service';

@Component({
  selector: 'app-client',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private route: ActivatedRoute;
  private dataService: BanqueAsyncService;

  client: Client = new Client();

  constructor(@Inject('BanqueAsyncService') dataService: BanqueAsyncService, route: ActivatedRoute) {
    this.dataService = dataService;
    this.route = route;
  }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // const id = parseInt(this.route.snapshot.params['id']);
    const id = Number(this.route.snapshot.params['id']);
    this.dataService.getClient(id)
      .subscribe( client => this.client = client );
    // this.client = this.dataService.getClient(id);
  }

}
