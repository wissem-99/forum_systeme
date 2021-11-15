import { HttpErrorResponse } from '@angular/common/http';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { check_user} from '../model/check_user';
import { GererUtilisateurService } from '../services/gerer-utilisateur.service';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent  {
  
 email_utl!: string;
  mdp_utl! : string;
  loginErr = 'Invalide email ou  mot de passe .';
  loginn=true;
   id_utl !:number;
  constructor(private su : GererUtilisateurService , private router : Router) { }
  verif_text=" saisir le champ";
  test_champ_email=true;
  test_champ_mdp=true;

  ngOnInit(): void {
  
 
  }

 
  public aa() 
  { 
   localStorage.setItem("isloggedIn","false");
  localStorage.setItem("isloggedIn_user","false");
 }



  async login()
  {
    const t :check_user =
    {
     email_utl:this.email_utl, mdp_utl:this.mdp_utl
    }
  /*test champ email*/
  if (this.email_utl=="" || this.email_utl==undefined)
  {this.test_champ_email=false; }
  else
  {this.test_champ_email=true;}
  
  /*test champ mot de passe*/
  if(this.mdp_utl=="" ||this.mdp_utl==undefined)
  {this.test_champ_mdp=false;}
  else
  {this.test_champ_mdp=true;}
if ( this.test_champ_email && this.test_champ_mdp)
{
    console.log(t);
    this.su.checkuser(t).subscribe(
      (response:string) => {
        console.log(response);
        if (response=="1")
        {  this.get_id_utl(this.email_utl);
          localStorage.setItem("isloggedIn_user","true");
          
      }
        else
        {
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
public get_id_utl(em : string)
{
  this.su.get_id_utl(em).subscribe(
    (response:number) => {
      console.log("his id = "+response);
      const ch =response.toString();
      localStorage.setItem("id_utl",ch);
      this.router.navigate(['/eu']);
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
 this.su.verif_user(x).subscribe(
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

