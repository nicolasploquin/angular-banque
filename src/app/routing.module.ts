import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './components/clients/clients.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DemoComponent } from './components/demo/demo.component';
import { ClientReactiveFormComponent } from './components/client-reactive-form/client-reactive-form.component';
import { AuthGuard } from './components/auth/auth.guard';
import {HomeComponent} from './components/home/home.component';

// export const ROUTE_LISTE_CLIENTS = 'clients';

const ROUTES: Routes = [{
  path: '', component: HomeComponent, pathMatch: 'full'
}, {
  path: 'demo', component: DemoComponent
}, {
  path: 'clients', component: ClientsComponent
}, {
  path: 'client/form',
  component: ClientReactiveFormComponent,
  canActivate: [AuthGuard]
}, {
  path: 'client/:id', component: CustomerComponent
}, {
  path: '**', redirectTo: '/'
}];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule { }
