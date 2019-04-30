import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';

import {MaterialModule} from './material.module';

import {environment} from '../environments/environment';
import {RoutingModule} from './routing.module';

import {RootComponent} from './root/root.component';
import {ClientsComponent} from './clients/clients.component';
import {ClientComponent} from './client/client.component';
import {ClientFormComponent} from './client-form/client-form.component';
import {ClientReactiveFormComponent} from './client-reactive-form/client-reactive-form.component';
import {AuthentificationComponent} from './shared/authentification/authentification.component';
import {DemoComponent} from './demo/demo.component';
import {MessageComponent} from './shared/message/message.component';
import {CapitalizePipe} from './pipes/capitalize.pipe';
import {BanqueAsyncService} from './services/banque-async.service';
import {BanqueState} from './store/banque.state';

// registerLocaleData(localeFr, 'fr');

export const APP_DECLARATIONS = [
  RootComponent,
  ClientsComponent,
  ClientFormComponent,
  ClientReactiveFormComponent,
  ClientComponent,
  CapitalizePipe,
  AuthentificationComponent,
  DemoComponent,
  MessageComponent
];

export const APP_IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RoutingModule,
  MaterialModule,
  NgxsModule.forRoot([BanqueState])
];

export const APP_PROVIDERS = [
  // { provide: LOCALE_ID, useValue: 'fr' },
  // BanqueLocalService,
  // BanqueHttpService,
  // BanqueLocalAsyncService,
  // BanqueRestService,
  // {provide: 'BanqueService', useClass: BanqueLocalService},
  // { provide: 'BanqueService', useClass: environment.dataProvider}, // si interface
  { provide: BanqueAsyncService, useClass : environment.dataProvider} // si classe abstraite
];

@NgModule({
  declarations: APP_DECLARATIONS,
  imports: APP_IMPORTS,
  providers: APP_PROVIDERS,
  bootstrap: [RootComponent]
})
export class AppModule { }
