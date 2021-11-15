import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { add_commentaire } from '../model/add_commentaire';
import { commentaire } from '../model/commentaire';
import { ticket } from '../model/ticket';
import { user } from '../model/user';
import { CommentaireService } from '../services/commentaire.service';
import { GererUtilisateurService } from '../services/gerer-utilisateur.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  public nc: string[] | undefined;
  public x!: string[];
  constructor(private t: TicketService, private c: CommentaireService, private aa: GererUtilisateurService, private router: Router) { }
  a!: ticket;
  com !: string;
  nv_com!: add_commentaire;
 
  public coms: commentaire[] | undefined;



  ngOnInit(): void {

    this.check_acess();
  
    this.get_com_tic();
    this.get_com_my();
    this.get_info();

  }
  url :any;
  public get_info(): void {
    this.t.get_one_ticket(Number(localStorage.getItem("num_tic"))).subscribe(
      (response: ticket) => {
        this.a = response;
        console.log("aaaa")
        console.log(this.a);
        var reader = new FileReader();
          reader.onload =(_event) =>
          {
            this.url=reader.result;
          }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  public get_com_tic(): void {
    this.c.get_com_tic(Number(localStorage.getItem("num_tic")), Number(localStorage.getItem("id_utl"))).subscribe(
      (response: commentaire[]) => {
        this.coms = response;
        console.log(this.coms);
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public my_coms!: commentaire[];
  public get_com_my(): void {
    this.c.get_com_tic_my(Number(localStorage.getItem("num_tic")), Number(localStorage.getItem("id_utl"))).subscribe(
      (response: commentaire[]) => {
        this.my_coms = response;
        console.log(this.my_coms);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 test_com_vide=true;
  public add_com(): void {
    const nvc: add_commentaire =
    {
      com: this.com,
      num_tic: Number(localStorage.getItem("num_tic")),
      id_utl: Number(localStorage.getItem("id_utl"))
    }
    if (nvc.com==undefined)
    {
      this.test_com_vide=false;
    }
    else
    {
      this.test_com_vide=true;
    }
    console.log(nvc.com)
    if (this.test_com_vide)
    {
    this.c.add_com(nvc).subscribe(
      (response: string) => {
        if (response == "0") {
          this.get_info();
          this.get_com_tic();
          this.get_com_my();
          this.com = "";
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
    }
  }

  public delete_com(cd: commentaire) {
    if (window.confirm('are you sure you want to delete this comment? ')) {
      this.c.delete_com(cd.num_com, cd.num_tic).subscribe(
        (response: string) => {
          if (response == "0") {
            this.get_info();
            this.get_com_tic();
            this.get_com_my();
          }
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  public check_acess(): void {
    const acc = localStorage.getItem("isloggedIn_user")
    if (acc == "false") { this.router.navigate(['/ad']); }
  }
  public dec(): void {
    if (window.confirm(' Are you sure to Log Out ?')) {
      localStorage.setItem("isloggedIn_user", "false");
      localStorage.removeItem("id_utl");
      this.router.navigate(['/']);
    }
  }



  retour() {
    this.router.navigate(['/eu']);
  }
ch!:string;
y!:string;
h!:string[];
res=['tt'];
show=false;
xx!:string;
 t_analyse!:ticket;
vide=false;
etat!:string
public analyse(): void {
  console.log("etat");
  this.etat=(<HTMLInputElement>document.getElementById("edit_etat")).value;
  this.show=true;
  this.t.get_one_ticket(Number(localStorage.getItem("num_tic"))).subscribe(
    (response: ticket) => {
      this.t_analyse = response;
this.ch=this.t_analyse.files[0].data;
this.y=atob(this.ch);
this.h=this.y.split('\n')
this.res=[];
for ( let i in this.h)
{

let  o=0;
if( this.h[i].indexOf(this.etat)!=-1)
{
  this.xx=this.h[i];
  this.res.push("Ligne  "+i+ "   :  "+this.xx);
  o=o+1;
}
}
if (this.res.length==0)
{
  this.vide=true;
  console.log(this.res.length);
}
else
{
  this.vide=false;
  console.log(this.res.length);
}
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    });
}

}
