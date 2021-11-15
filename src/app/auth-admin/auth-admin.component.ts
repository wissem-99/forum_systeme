import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { check_admin } from '../model/check_admin';
import { AuthAdminService } from '../services/auth-admin.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.css']
})
export class AuthAdminComponent implements OnInit {
 

  loginErr = 'Invalide email ou  mot de passe .';
  loginn=true;
email_admin!:string;
mdp_admin!:string;
verif_text=" saisir le champ";
test_champ_email=true;
test_champ_mdp=true;


    constructor(   private aas :AuthAdminService ,private router : Router) {
     }
  ngOnInit(): void  {

  }

  
   public aa() 
   { 
    localStorage.setItem("isloggedIn","false");
    localStorage.setItem("isloggedIn_user","false");
   }
   
    async login(){
      const a : check_admin =
      {
        email_admin:this.email_admin,
        mdp_admin:this.mdp_admin
      }
      /*test champ email*/
      if (this.email_admin=="" || this.email_admin==undefined)
      {this.test_champ_email=false; }
      else
      {this.test_champ_email=true;}
      
      /*test champ mot de passe*/
      if(this.mdp_admin=="" ||this.mdp_admin==undefined)
      {this.test_champ_mdp=false;}
      else
      {this.test_champ_mdp=true;}
if ( this.test_champ_email && this.test_champ_mdp)
{
      console.log(a)
      this.aas.check_admin(a).subscribe(
        (response:string) => {
          console.log(response);
          if (response=="1")
          {console.log("good, nice job");
          localStorage.setItem("isloggedIn","true");
          this.get_id_admin(a.email_admin);
        this.router.navigate(['/iu']);
        }
        else{
          this.loginn=false;
        }
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }
  else
{console.log("saisir");}
}


public get_id_admin(em : string)
{
  this.aas.get_id_admin(em).subscribe(
    (response:number) => {
      console.log("his id = "+response);
      const ch =response.toString();
      localStorage.setItem("id_admin",ch);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
public not_find=true;
public champ_verif=true;
public find=true;
public ch="";

 public rech() :void
{
 var x= (<HTMLInputElement>document.getElementById("em_v")).value;
 console.log(x);
 if ( x=="")
 { this.champ_verif=false;
  this.not_find=true;
  this.find=true;
}
 else
 {
  this.champ_verif=true;
 this.aas.verif_admin(x).subscribe(
  (response:number) => {
    if (response ==0)
    {
      this.not_find=false;
      this.find=true;
    }
    else
    {
       this.not_find=true;
       this.find=false;
       this.hide();
    }
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
);}
}



vider() :void
{
(<HTMLInputElement>document.getElementById("em_v")).value="";
  this.not_find=true;
this.champ_verif=true;
this.find=true;
}

 hide():void
{ 
  let element:HTMLElement = document.getElementById('r') as HTMLElement;
  setTimeout(()=> element.click(), 1500);
 }

  }
   
  

  



