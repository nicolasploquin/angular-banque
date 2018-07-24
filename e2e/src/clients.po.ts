import { browser, by, element } from 'protractor';

export class ClientsPage {
  navigateTo() {
    return browser.get('/clients');
  }

  getPageTitle() {
    return element(by.css('app-clients h2')).getText();
  }
}
