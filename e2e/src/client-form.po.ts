import { browser, by, element } from 'protractor';

export class ClientFormPage {
  navigateTo() {
    return browser.get('/client/form');
  }

  getPageTitle() {
    return element(by.css('app-client-form h2')).getText();
  }
}
