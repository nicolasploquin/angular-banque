import { AppPage } from './app.po';
import {ClientFormPage} from './client-form.po';

describe('workspace-project App', () => {
  let pageRoot: AppPage;
  let pageClientForm: ClientFormPage;

  beforeEach(() => {
    pageRoot = new AppPage();
    pageClientForm = new ClientFormPage();
  });

  it('should display welcome message', () => {
    pageRoot.navigateTo();
    expect(pageRoot.getAppTitle()).toEqual('Ma Banque');
  });
  it('doit afficher le formulaire client', () => {
    pageClientForm.navigateTo();
    expect(pageClientForm.getPageTitle()).toEqual('Nouveau client');
  });
});
