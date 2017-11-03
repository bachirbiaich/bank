import { Mouvement } from '../../../Classes/mouvement';

export interface GetMouvementsByCompteIdResponse {
    hasErrors: boolean,
    data: Array<Mouvement>
 }