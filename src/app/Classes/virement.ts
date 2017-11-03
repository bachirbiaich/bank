export class Virement{
    recipient_iban:string;
    sender_id:string;
    montant:Number;
    date:Number;

    constructor(recipient_iban:string, sender_id:string, montant:Number, date:Number){
        this.recipient_iban = recipient_iban;
        this.sender_id = sender_id;
        this.montant = montant;
        this.date = date;
    }
}