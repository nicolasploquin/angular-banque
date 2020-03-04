import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData, TitleCasePipe} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';

import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

import {MaterialModule} from './material.module';

import {environment} from '../environments/environment';
import {RoutingModule} from './routing.module';

import {RootComponent} from './components/root/root.component';
import {ClientsComponent} from './components/clients/clients.component';
import {CustomerComponent} from './components/customer/customer.component';
import {ClientFormComponent} from './components/client-form/client-form.component';
import {ClientReactiveFormComponent} from './components/client-reactive-form/client-reactive-form.component';
import {AuthentificationComponent} from './shared/authentification/authentification.component';
import {DemoComponent} from './components/demo/demo.component';
import {MessageComponent} from './shared/message/message.component';
import {CapitalizePipe} from './pipes/capitalize.pipe';
import {BanqueAsyncService} from './services/banque-async.service';
// import {BanqueState} from './store/banque.state';
import {NomLongPipe} from './pipes/nom-long.pipe';
import {HomeComponent} from './components/home/home.component';
import {BanqueRestService} from './services/banque-rest.service';

// Traduction du framework angular (pipe date, materials)
// import {registerLocaleData} from '@angular/common';
// import localeFr from '@angular/common/locales/fr';
// registerLocaleData(localeFr, 'fr');

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

export const APP_DECLARATIONS = [
  AuthentificationComponent,
  ClientsComponent,
  ClientFormComponent,
  ClientReactiveFormComponent,
  CustomerComponent,
  DemoComponent,
  MessageComponent,
  HomeComponent,
  RootComponent,
  CapitalizePipe,
  NomLongPipe
];

export const APP_IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RoutingModule,
  MaterialModule
  // NgxsModule.forRoot([BanqueState])
];

export const APP_PROVIDERS = [
  // { provide: 'TitleCasePipe', useClass: TitleCasePipe },
  // { provide: LOCALE_ID, useValue: 'fr-FR' },
  // BanqueLocalService,
  // BanqueHttpService,
  // BanqueLocalAsyncService,
  // BanqueRestService,
  // {provide: 'BanqueService', useClass: BanqueRestService},
  // {provide: 'BanqueService', useClass: BanqueLocalService},
  // { provide: 'BanqueService', useClass: environment.dataProvider},
  { provide: 'BanqueAsyncService', useClass : environment.dataProvider}
];

@NgModule({
  declarations: APP_DECLARATIONS,
  imports: APP_IMPORTS,
  providers: APP_PROVIDERS,
  bootstrap: [RootComponent]
})
export class AppModule { }
