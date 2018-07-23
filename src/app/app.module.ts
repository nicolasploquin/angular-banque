import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {BanqueHttpService} from './services/banque-http.service';
import {BanqueLocalService} from './services/banque-local.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CapitalizePipe} from './pipes/capitalize.pipe';
import {ClientFormComponent} from './client-form/client-form.component';
import {ClientsComponent} from './clients/clients.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {RootComponent} from './root/root.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {BanqueRestService} from './services/banque-rest.service';
import {HttpClientModule} from '@angular/common/http';
import {ClientComponent} from './client/client.component';
import {BanqueLocalAsyncService} from './services/banque-local-async.service';
import {AuthentificationComponent} from './shared/authentification/authentification.component';
import {CommonModule, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DemoComponent } from './demo/demo.component';
import { MessageComponent } from './shared/message/message.component';

// registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    RootComponent,
    ClientsComponent,
    ClientFormComponent,
    ClientComponent,
    CapitalizePipe,
    AuthentificationComponent,
    DemoComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule
  ],
  providers: [
//    { provide: LOCALE_ID, useValue: 'fr' },
    BanqueLocalService,
    BanqueLocalAsyncService,
    BanqueHttpService,
    BanqueRestService
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
