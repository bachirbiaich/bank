export class Virement{
    recipient_iban:string;
    sender_id:string;
    montant:number;
    date:number;

    constructor(recipient_iban:string, sender_id:string, montant:number, date:number){
        this.recipient_iban = recipient_iban;
        this.sender_id = sender_id;
        this.montant = montant;
        this.date = date;
    }
}