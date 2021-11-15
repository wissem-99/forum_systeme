import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../model/user';
import { GererUtilisateurService } from '../services/gerer-utilisateur.service';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {
;
  

  constructor(private router : Router , private aa : GererUtilisateurService) { }

   a!: user;
  ngOnInit(): void {
    this.check_acess();
  }

  public check_acess() : void
  {
    const acc=localStorage.getItem("isloggedIn_user")
    if (acc=="false")
    {  this.router.navigate(['/ad']);  }
    else
    {
      this.get_user();
    }
  }
  public dec () : void
  {if (window.confirm(' Are you sure to Log Out ?'))
  {
    localStorage.setItem("isloggedIn_user","false");
    localStorage.removeItem("id_utl");
    this.router.navigate(['/']);
  }
  }
  public get_user() : void 
  {
    
  const id = Number(localStorage.getItem("id_utl"));
    this.aa.get_user(id).subscribe(
      (response:user) => {
       this.a=response;
       console.log(this.a);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

}



ch="incorect mot de passe"
test_mdp=true;
  hide()
{
  let element:HTMLElement = document.getElementById('r') as HTMLElement;
  element.click();
}

  retour() {
    this.router.navigate(['/eu']);
  }
  affiche=false;
  aff=false;
  format_pwd=true;
  meme_mdp=true;
  fermer() {
    this.test_mdp = true;
    this.affiche = false;
    this.aff = false;
    this.format_pwd=true;
    this.meme_mdp=true;
    (<HTMLInputElement>document.getElementById("mdp")).value = "";
    (<HTMLInputElement>document.getElementById("nv_mdp")).value = "";
    (<HTMLInputElement>document.getElementById("c_nv_mdp")).value = "";
  }
  public verif(a:user) {
    var mdp = (<HTMLInputElement>document.getElementById("mdp")).value
    console.log(mdp);
    if (mdp == a.mdp_utl) {
      this.affiche = true;
      this.aff = true;
      this.test_mdp = true;
    }
    else {
      this.test_mdp = false;
      this.affiche = false;
    }
  }
  public change(a: user) {
    var nv_mdp = (<HTMLInputElement>document.getElementById("nv_mdp")).value;
    if (nv_mdp.length < 8 || nv_mdp.indexOf(" ") >= 1 || nv_mdp.length > 12) {
      this.format_pwd = false;
    }
    else {
      this.format_pwd = true;
    }
    if (this.format_pwd) {
      var c_nv_mdp = (<HTMLInputElement>document.getElementById("c_nv_mdp")).value;
      if (nv_mdp != c_nv_mdp) {
        this.meme_mdp = false;
      }
      else {
        this.meme_mdp = true;
      }
    }
    if ( this.meme_mdp && this.format_pwd)
    {
    a.mdp_utl = nv_mdp;
    console.log(a);
    this.aa.update_mdp_user(a).subscribe(
      (response: string) => {
        if (response == "0") {
          alert("mot de passe bien modifiée");
          this.hide();
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    }
    
  }

}
