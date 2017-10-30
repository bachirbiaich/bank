export class Mouvement{
    compte_id:string;
    montant:Number;
    date:Date;

    constructor(compte_id:string, montant:Number, date:Date){
        this.compte_id = compte_id;
        this.montant = montant;
        this.date = date;
    }
}