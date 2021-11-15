import { files } from "./files";
import { user } from "./user";
export interface ticket 
{
    num_tic : number,
    sujet : String ,
    contenu : string ,
    etat : string ,
    nb_com: number,
    date_creation :Date,
    id_utl : number,
   utilisateur:user,
    files:files[]
}