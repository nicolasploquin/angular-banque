import { Operation } from "./operation";

/**
 * Created by Nicolas on 09/09/2016.
 */
export class Compte {
    private static num = 10;

    public id: number = ++Compte.num;
    public numero: string;
    public intitule: string;
    public operations: Operation[] = [];

    constructor(_numero: string, _intitule?: string) {
      this.numero = _numero;
      this.intitule = _intitule ? _intitule : '';
    }

    get solde(): number {
      return this.operations.map( ope => ope.montant ).reduce( (m1,m2) => m1 + m2 ); 
    }
}
