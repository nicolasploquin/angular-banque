import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material.module';

import {environment} from '../environments/environment';
import {ROUTES} from './app.routes';

import {RootComponent} from './root/root.component';
import {ClientsComponent} from './clients/clients.component';
import {ClientComponent} from './client/client.component';
import {ClientFormComponent} from './client-form/client-form.component';
import {AuthentificationComponent} from './shared/authentification/authentification.component';
import {DemoComponent} from './demo/demo.component';
import {MessageComponent} from './shared/message/message.component';
import {CapitalizePipe} from './pipes/capitalize.pipe';
import {BanqueAsyncService} from './services/banque-async.service';

// registerLocaleData(localeFr, 'fr');

export const APP_DECLARATIONS = [
  RootComponent,
  ClientsComponent,
  ClientFormComponent,
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
  HttpClientModule,
  RouterModule.forRoot(ROUTES),
  MaterialModule
];

export const APP_PROVIDERS = [
  // { provide: LOCALE_ID, useValue: 'fr' },
  // BanqueLocalService,
  // BanqueHttpService,
  // BanqueLocalAsyncService,
  // BanqueRestService,
  // {provide: BanqueAsyncService, useClass: BanqueRestService}
  {provide: BanqueAsyncService, useClass : environment.dataProvider}
];

@NgModule({
  declarations: APP_DECLARATIONS,
  imports: APP_IMPORTS,
  providers: APP_PROVIDERS,
  bootstrap: [RootComponent]
})
export class AppModule { }
