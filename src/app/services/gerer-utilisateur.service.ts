import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { check_user } from '../model/check_user';
import {user} from '../model/user';
import { add_user } from '../model/add_user';
@Injectable({
  providedIn: 'root'
})
export class GererUtilisateurService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient){}

  public checkuser(x :check_user): Observable<string>
  {
    return this.http.post<string>(`${this.apiServerUrl}/check_utl`,x);
  }

  public getusers() : Observable<user[]>
  {
    return this.http.get<user[]>(`${this.apiServerUrl}/utilisateurs`);
}

public adduser(up : add_user) : Observable< string>
{
  return this.http.post<string>(`${this.apiServerUrl}/ajout_utl`,up);
}

public deleteuser(idu : number) : Observable< string>
{  return this.http.delete<string>(`${this.apiServerUrl}/delete_utl/`+idu);}



public updateuser( x : add_user) : Observable<string>
{
  return this.http.put<string>(`${this.apiServerUrl}/update_utl`,x);
}

public get_id_utl(em : string) : Observable<number>
{
 return this.http.get<number>(`${this.apiServerUrl}/get_id_utl/`+em);
}

public get_user (id : number) : Observable<user>
{
  return this.http.get<user>(`${this.apiServerUrl}/get_user/`+id);
}

public verif_user(em :string) :Observable<number>
  {
    return this.http.get<number>(`${this.apiServerUrl}/verif_user/`+em);
  }

  public update_mdp_user(u:user) :Observable<string>
  {
    return this.http.post<string>(`${this.apiServerUrl}/update_mdp_user`,u);
  }
}