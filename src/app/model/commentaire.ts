import { user } from "./user";

export interface commentaire 
{
    num_com : number,
    com :string,
    dh_com :Date,
    num_tic :number,
    id_utl :number    ,
    utilisateur:user
}