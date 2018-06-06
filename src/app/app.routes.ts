import {Routes} from '@angular/router';

import {ClientsComponent} from './clients/clients.component';
import {ClientFormComponent} from './client-form/client-form.component';
import {ClientComponent} from './client/client.component';

// export const ROUTE_LISTE_CLIENTS = 'clients';

export const ROUTES: Routes = [{
  path: '', component: ClientsComponent, pathMatch: 'full'
}, {
  path: 'clients', component: ClientsComponent
}, {
  path: 'client/form', component: ClientFormComponent
}, {
  path: 'client/:id', component: ClientComponent
}, {
  path: '**', redirectTo: '/'
}];
