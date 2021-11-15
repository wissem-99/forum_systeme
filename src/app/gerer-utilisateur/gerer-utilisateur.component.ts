import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { add_user } from '../model/add_user';
import { user } from '../model/user';
import { GererUtilisateurService } from '../services/gerer-utilisateur.service';

@Component({
  selector: 'app-gerer-utilisateur',
  templateUrl: './gerer-utilisateur.component.html',
  styleUrls: ['./gerer-utilisateur.component.css']
})
export class GererUtilisateurComponent implements OnInit {
  user: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor( private sg : GererUtilisateurService ,private router:Router) { }
  public users: user[] | undefined ;
 public chd : string |undefined;
test_existe=true;
text_existe= " Email deja utilise";
nom_utl!:string;
  prenom_utl!:string;
  email_utl!:string;
  poste!:string;
 verif_text=" saisir le champ";
 test_champ_nom=true;
 test_champ_prenom=true;
 test_champ_email=true;
test_champ_poste=true;

email_format=true;
email_format_text="format invalid";
  ngOnInit(){
    this.check_acess();
    
  
this.getusers();
 }


 public aa() 
 { 
  localStorage.setItem("isloggedIn","false");
  localStorage.setItem("isloggedIn_user","false");
  
 }

public check_acess() : void
{
  const acc=localStorage.getItem("isloggedIn")
  if (acc=="false")
  {  this.router.navigate(['/ad']);  }
  
}

public dec () : void
{if (window.confirm(' Êtes-vous sûr de vous déconnecter ?'))
{
  localStorage.setItem("isloggedIn","false");
  localStorage.removeItem("id_admin");
  this.router.navigate(['/']);
}
}

public getusers() :void
{
   
  console.log("hello its work ");
  this.sg.getusers().subscribe(
    (response:user[]) => {
      this.users=response;
      console.log(this.users);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );

}
public ajouter() {
  
  const new_user : add_user=
  {
  nom_utl:this.nom_utl,
  prenom_utl:this.prenom_utl,
  email_utl:this.email_utl,
  poste: this.poste
  }
  console.log("work")
  /*test champ nom*/
  if (this.nom_utl=="" || this.nom_utl==undefined)
  { this.test_champ_nom=false;}
  else
  { this.test_champ_nom=true;}
  /*test champ prenom*/
  if (this.prenom_utl==undefined || this.prenom_utl=="")
  { this.test_champ_prenom=false; }
  else
  { this.test_champ_prenom=true;}

   /*test champ email*/
  if (this.email_utl==undefined ||this.email_utl=="")
  { this.test_champ_email=false; }
  else
  { this.test_champ_email=true; }
  
 /*test  format champ email*/
 if (this.checkEmail(this.email_utl))
 { this.email_format=true; }
 else
 { this.email_format=false; }

  /* test champ poste */
  if (this.poste==undefined || this.poste=="")
  {this.test_champ_poste=false;}
  else
  {this.test_champ_poste=true;}


 if (this.test_champ_nom && this.test_champ_prenom && this.test_champ_email && this.test_champ_poste && this.email_format)
 { 
  console.log(new_user);
  this.sg.adduser(new_user).subscribe(
    (response: string) => {
      if (response == "0") {
        this.test_existe=true;
        console.log("good, nice job");
         this.getusers();
         this.poste="";
      this.hide();
      }
      else
      {
        console.log(response);
        this.test_existe=false;
      }
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      this.poste="";
    }
  );
  
}
else
{console.log("saisir des champs");}

}


 supp(x :user)
{
  console.log(x);
  if (window.confirm('êtes-vous sûr de supprimer cet utilisateur'))
  {
    this.sg.deleteuser(x.id_utl).subscribe(
      (response: string) => {
         this.chd= response;
          console.log(this.chd);
      this.getusers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
}}

public update ( x:user)
{if (window.confirm('êtes-vous sûr de mettre à jour cet utilisateur'))
{
  this.nom_utl=(<HTMLInputElement>document.getElementById("nom_e")).value;
this.prenom_utl=(<HTMLInputElement>document.getElementById("prenom_e")).value;
this.poste=(<HTMLInputElement>document.getElementById("poste_e")).value;
 x.nom_utl=this.nom_utl;
 x.prenom_utl=this.prenom_utl;
 x.poste=this.poste;
 console.log(x);
  
    this.sg.updateuser(x).subscribe(
      (response: string) => {
         this.chd= response;
          console.log(this.chd);
          if (this.chd=="1")
          {
            
            this.getusers();
          }
          else
          {
      this.getusers();
          }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
}this.vider();
}


 y!:user;
 public set(y:user): void
{
 this.y=y;
}

hide()
{
  let element:HTMLElement = document.getElementById('r') as HTMLElement;
         element.click();
}

public checkEmail(email:string ) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

public vider()
{
  this.poste="";
this.nom_utl="";
this.prenom_utl="";
this.email_utl="";
  this.test_champ_nom=true;
 this.test_champ_prenom=true;
 this.test_champ_email=true;
  this.test_champ_poste=true;
  this.email_format=true;
  this.test_existe=true;
}
}
