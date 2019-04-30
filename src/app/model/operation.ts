export class Operation {

    date: Date;
    libelle: string;
    montant: number;
    type: string;

    constructor(params?: any){
        if(typeof(params) !== "object") return;
        this.date = params.date?params.date:new Date();
        this.libelle = params.libelle?params.libelle:"";
        this.montant = params.montant?params.montant:0;
        this.type = params.type?params.type:"";
    }

}
