import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-user-espace',
  templateUrl: './user-espace.component.html',
  styleUrls: ['./user-espace.component.css']
})
export class UserEspaceComponent implements OnInit {

  constructor( private router :Router , private sa :TicketService) { }

  ngOnInit(): void {
    this.check_acess();
   this.refrech();
  }
  
  public check_acess() : void
  {
    const acc=localStorage.getItem("isloggedIn_user")
    if (acc=="false")
    {  this.router.navigate(['/ad']);  }
    
  }
  public dec () : void
  {if (window.confirm(' Are you sure to Log Out ?'))
  {
    localStorage.setItem("isloggedIn_user","false");
    localStorage.removeItem("id_utl");
    this.router.navigate(['/']);
  }
  }

  public refrech()
  {
    this.router.navigate(['/eu']);
  }
}
