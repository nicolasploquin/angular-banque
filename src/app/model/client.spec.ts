import {Client} from './client';

describe('Classe métier Client', () => {

  beforeEach(() => {
  });

  it('doit créer un objet client', () => {
    const client = new Client();
    expect(client).toBeTruthy();
  });

  it('doit contenir un tableau de compte vide', () => {
    const client = new Client();
    expect(client.comptes).toBeTruthy();
    expect(client.comptes.length).toBe(0); // ===
  });
  
});
