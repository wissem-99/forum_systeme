import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { add_ticket } from '../model/add_ticket';
import { ticket } from '../model/ticket';
import { ProfilUserComponent } from '../profil-user/profil-user.component';
import { FileUploadService } from '../services/file-upload.service';
import { TicketService } from '../services/ticket.service';
@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {
  show=true;
  my_tickets!: ticket[];
  url!: string;
  etat!: string;
  sujet !: string;
  contenu!: string;
 
  id_utl: number | undefined;
  etat_tableau: string[] = [];
  y!: ticket;
 msg="saisir champ";
  constructor(private sa: TicketService, private uploadService:FileUploadService) { }
xxx?:Observable<any>;
  ngOnInit(): void {
    this.xxx=this.sa.get_test();
    this.get_tickets();

  }
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }


  public get_tickets(): void {
    this.nettoyer();
    this.sa.my_tickets(Number(localStorage.getItem("id_utl"))).subscribe(
      (response: ticket[]) => {
       
        console.log(response);
        this.my_tickets = response;
        console.log(this.my_tickets);
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public supp_tic(t: ticket) {
    if (window.confirm('êtes-vous sûr de supprimer cette ticket ? ' )) {
      this.sa.supp_ticket(t.num_tic, t.id_utl).subscribe(
        (response: String) => {
          if (response == "0") {
            this.get_tickets();
          }
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }
  yy !: string;
  test_champ_sujet_edit=true;
  test_champ_contenu_edit=true;
  public update_tic( t:ticket) {
    console.log(t);
    this.sujet=(<HTMLInputElement>document.getElementById("edit_sujet")).value;
    this.contenu=  (<HTMLInputElement>document.getElementById("edit_contenu")).value;
   this.etat= (<HTMLInputElement>document.getElementById("edit_etat")).value;
   if (this.sujet=="")
   {this.test_champ_sujet_edit=false;}
   else
   {this.test_champ_sujet_edit=true;}
   if (this.contenu=="")
   {this.test_champ_contenu_edit=false}
   else
   {this.test_champ_contenu_edit=true;}
  

   if ( this.test_champ_contenu_edit && this.test_champ_sujet_edit)
   {console.log(t);
    t.sujet=this.sujet;
    t.contenu=this.contenu;
    t.etat=this.etat;
    this.sa.update_tic(t).subscribe(
      (response: String) => {
        if (response == "0") {
          this.get_tickets();
          this.etat_tableau=[];
          this.hide('edit');
          this.contenu="";
          this.sujet="";
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }}

  public charger(e: ticket) {
    this.y = e;
    /*'en_cours','Résolut','fermée'*/
    switch (e.etat) {
      case "en_cours" :
  {this.etat_tableau = ['Résolut', 'fermée'];
    break; }
       case "Résolut" :
     {this.etat_tableau = ['en_cours', 'fermée'];
      break;}
      case "fermée" :
        {
          this.etat_tableau = ['Résolut', 'en_cours'];
      break;
        }
    }
  }
  test_champ_sujet=true;
  test_champ_contenu=true;
public ajout(): void {
    this.id_utl = Number(localStorage.getItem("id_utl"));
    const nt: add_ticket =
    {
      sujet: this.sujet,
      contenu: this.contenu,
      id_utl: this.id_utl,
    }
    console.log("tester");
    if (nt.sujet==undefined || nt.sujet=="")
    { this.test_champ_sujet=false;}
    else
    {this.test_champ_sujet=true;}
     
    if (nt.contenu==undefined || nt.contenu=="")
    {this.test_champ_contenu=false;}
    else
    {this.test_champ_contenu=true;}
    if ( this.test_champ_contenu && this.test_champ_sujet)
   {console.log(nt)
    this.sa.ajout_ticket(nt).subscribe(
      (response: string) => {
        if (response != "0") {
        
          this.show=false;
          /*this.hide('add');
          this.contenu="";
          this.sujet="";*/
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    }
  
  }
  
  hide( id :string)
  {  let element:HTMLElement = document.getElementById(id) as HTMLElement;
     element.click(); }

     init()
     {
       this.test_champ_contenu=true;
       this.test_champ_sujet=true;
       this.nettoyer();
       this.show=true;
             this.contenu="";
             this.sujet="";
             this.message="";
             this.progress=0;
     }
     init_edit()
     {
       this.test_champ_contenu_edit=true;
       this.test_champ_sujet_edit=true;
     }
     /*
  onselectfile(event: any) {
    console.log("here");
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = async data => {
        this.url = data.target?.result as string;
      }
    }
  }*/
  
  fileInfos?: Observable<any>;
  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      console.log("fichier");
      console.log(file);
      if (file) {
        this.currentFile = file;
        console.log("fichier");
          console.log(this.currentFile);
        this.uploadService.upload(this.currentFile,Number(localStorage.getItem("id_utl"))).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
           this.get_tickets();
           this.hide('add');
             this.show=true;
             this.contenu="";
             this.sujet="";
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          });

      }

      this.selectedFiles = undefined;
    }

}



public nettoyer() : void
{
  this.sa.nettoyer(Number(localStorage.getItem("id_utl"))).subscribe(
    (response : String) => {
      console.log(response);
    },

    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  }
  
}

