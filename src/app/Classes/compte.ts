export class Compte{
    owner_id:string;
    solde:Number;
    creation_date:Date;
    iban:string;

    constructor(owner_id:string, solde:Number, creation_date:Date, iban:string){
        this.owner_id = owner_id;
        this.solde = solde;
        this.creation_date = creation_date;
        this.iban = iban;
    }
}