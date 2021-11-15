import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ticket } from '../model/ticket';
import { add_ticket } from '../model/add_ticket';
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient){}

  public get_all_ticket(): Observable<ticket[]>
  {
    return this.http.get<ticket[]>(`${this.apiServerUrl}/all_ticket`);
  }
  public get_all(id:number): Observable<ticket[]>
  {
    return this.http.get<ticket[]>(`${this.apiServerUrl}/get_all/`+id);
  }
  public ajout_ticket(t : add_ticket): Observable<string>
  {
    return this.http.post<string>(`${this.apiServerUrl}/ajout_ticket/`,t);
  }

  public supp_ticket(num : number, id : number) : Observable<string>
  {
    return this.http.delete<string>(`${this.apiServerUrl}/delete_tic/`+num+`/`+id);
  }

  public my_tickets(id : number) : Observable<ticket[]>
  {
    return this.http.get<ticket[]>(`${this.apiServerUrl}/get_my/`+id);
  }

  public update_tic(t:ticket) : Observable<String>
  {
    return this.http.put<String>(`${this.apiServerUrl}/update_etat`,t);
  }
  
  public get_one_ticket(id : number): Observable<ticket>
  {
    return this.http.get<ticket>(`${this.apiServerUrl}/get_one_ticket/`+id);
  }
public get_nom_ticket(id :number) : Observable<string[]>
{
  return this.http.get<string[]>(`${this.apiServerUrl}/get_nom_ticket/`+id);
}

public get_max(id :number):Observable<number>
{
  return this.http.get<number>(`${this.apiServerUrl}/get_max/`+id );
}

get_test(): Observable<any> {
  return this.http.get(`${this.apiServerUrl}/all_ticket`);
}

public nettoyer(id : number): Observable<String>
{
 return this.http.delete<string>(`${this.apiServerUrl}/nettoyer/`+id);
}
}
