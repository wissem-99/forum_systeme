import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ticket } from '../model/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
public tickets : ticket[] |undefined;

  constructor( private sa : TicketService,private router : Router ) { }
ch!:String | undefined;
x!:number |undefined;
show=false;
  ngOnInit(): void {
    this.nettoyer();
    this.get_tickets();
  }
  public get_tickets() :void
  {
    this.sa.get_all(Number(localStorage.getItem("id_utl"))).subscribe(
      (response:ticket[]) => {
        this.tickets=response;
        console.log(this.tickets);
        if (this.tickets.length<3)
        { console.log("moins 3");
          this.show=true;
        }
        else
        {
          this.show=false;
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
}


public comment(t:ticket)
{
  this.router.navigate(['/com']);
  localStorage.setItem("nom",t.id_utl.toString());
localStorage.setItem("num_tic",t.num_tic.toString());
}



public nettoyer() : void
{
  this.sa.nettoyer(Number(localStorage.getItem("id_utl")));
}
}
