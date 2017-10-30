export class User{
    firstName:string;
    lastName:string;
    mail:string;
    password:Number; //8 chiffres strictement

    constructor(firstName:string, lastName:string, mail:string, password:Number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.password = password;
    }
}