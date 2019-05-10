import { AppPage } from './app.po';
import {ClientFormPage} from './client-form.po';
import {ClientsPage} from './clients.po';

describe('workspace-project App', () => {
  let pageRoot: AppPage;
  let pageClientForm: ClientFormPage;
  let pageClients: ClientsPage;

  beforeEach(() => {
    pageRoot = new AppPage();
    pageClientForm = new ClientFormPage();
    pageClients = new ClientsPage();
  });

  it('should display app title', () => {
    pageRoot.navigateTo();
    expect(pageRoot.getAppTitle()).toEqual('Ma Banque');
  });
  it('doit afficher le formulaire client', () => {
    pageClientForm.navigateTo();
    expect(pageClientForm.getPageTitle()).toEqual('Nouveau client');
  });
  // it('doit afficher le titre de la liste des clients en anglais', () => {
  //   pageClients.navigateTo();
  //   expect(pageClients.getPageTitle()).toBe('Customers');
  // });
});
