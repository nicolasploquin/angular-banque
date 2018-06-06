/**
 * Created by Nicolas on 09/09/2016.
 */
export class Compte {
    private static num = 10;

    public id: number = ++Compte.num;
    public numero: string;
    public intitule: string;
    public operations: Object[] = [];

    constructor(_numero: string, _intitule?: string) {
      this.numero = _numero;
      this.intitule = _intitule ? _intitule : '';
    }
}
