import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { admin } from '../model/admin';
import { check_admin } from '../model/check_admin';



@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient){}

    public check_admin(a:check_admin): Observable<string>
    {
      return this.http.post<string>(`${this.apiServerUrl}/check_admin`,a);
    }
    
  public get_admin(id : number) : Observable<admin>
  {
    return this.http.get<admin>(`${this.apiServerUrl}/get_admin/`+id);
  }
  public get_id_admin(em : string) : Observable<number>
  {
   return this.http.get<number>(`${this.apiServerUrl}/get_id_admin/`+em);
  }

  public verif_admin(em :string) :Observable<number>
  {
    return this.http.get<number>(`${this.apiServerUrl}/verif_admin/`+em);
  }

  public update_mdp_admin(ad :admin) : Observable<string>
  {
    return this.http.post<string>(`${this.apiServerUrl}/update_mdp_admin`,ad);
  }

}
