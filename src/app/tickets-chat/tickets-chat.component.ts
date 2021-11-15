import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ticket } from '../model/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tickets-chat',
  templateUrl: './tickets-chat.component.html',
  styleUrls: ['./tickets-chat.component.css']
})
export class TicketsChatComponent implements OnInit {

  my_tickets! : ticket[];
 url!:string;
 etat!:string;
 sujet !: string;
 contenu!: string;
 fichier!:File;
 id_utl: number | undefined;
 show=false;
  constructor( private sa : TicketService , private router :Router ) { }


  ngOnInit(): void {
    this.get_tickets();

  }

  public comment(t:ticket)
{
  this.router.navigate(['/com']);
  localStorage.setItem("nom",t.id_utl.toString());
localStorage.setItem("num_tic",t.num_tic.toString());
}

  public get_tickets() :void
  {
    console.log("hello its work ");
    this.sa.my_tickets(Number(localStorage.getItem("id_utl"))).subscribe(
      (response:ticket[]) => {
        this.my_tickets=response;
        console.log(this.my_tickets);
        if (this.my_tickets.length<3)
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

}
