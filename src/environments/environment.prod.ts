import {BanqueRestService} from '../app/services/banque-rest.service';

export const environment = {
  production: true,
  api: 'https://banque.azurewebsites.net/api',
  dataProvider: BanqueRestService
};
