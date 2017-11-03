import { Compte } from '../../../Classes/compte';

export interface GetComptesResponse {
    data:Array<Compte>,
    hasErrors: boolean,
 }