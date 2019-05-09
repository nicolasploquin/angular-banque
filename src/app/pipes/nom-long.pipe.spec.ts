import { NomLongPipe } from './nom-long.pipe';
import {Client} from '../model/client';

describe('NomLongPipe', () => {

  it('create an instance', () => {
    const pipe = new NomLongPipe();
    expect(pipe).toBeTruthy();
  });
  it('doit affiche le nom complet du client avec la casse standard', () => {
    const pipe = new NomLongPipe();
    const client = new Client();
    client.nom = 'leBLanC';
    client.prenom = 'marc';
    expect(pipe.transform(client)).toBe('Marc LEBLANC');
  });
});
