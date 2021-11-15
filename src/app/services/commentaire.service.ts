import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { add_commentaire } from '../model/add_commentaire';
import { commentaire } from '../model/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor( private http : HttpClient) { }

  public get_com_tic(num_tic : number , id: number) :Observable<commentaire[]>
  {
    return this.http.get<commentaire[]>(`${this.apiServerUrl}/get_com_tic_not_me/`+num_tic+`/`+id);
  }
 
  public get_com_tic_my(num_tic : number , id: number) :Observable<commentaire[]>
  {
    return this.http.get<commentaire[]>(`${this.apiServerUrl}/get_com_my/`+num_tic+`/`+id);
  }
  public add_com( c : add_commentaire) :Observable<string>
  {
    return this.http.post<string>(`${this.apiServerUrl}/add_com`,c);
  }

  public delete_com(num_com : number , num_tic : number ) : Observable<string>
  {
    return this.http.delete<string>(`${this.apiServerUrl}/delete_com/`+num_com+`/`+num_tic);
  }
  public get_nom_ticket(num_tic :number ,id :number) : Observable<string[]>
{
  return this.http.get<string[]>(`${this.apiServerUrl}/get_nom_com/`+id+`/`+num_tic);
}
}
