import { Virement } from '../../../Classes/virement';

export interface VirementsResponse {
    hasErrors: boolean,
    data: Array<Virement>
}
