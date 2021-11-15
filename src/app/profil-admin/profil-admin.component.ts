import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from '../services/auth-admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { admin } from '../model/admin';
@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent implements OnInit {

  constructor(private router: Router, private sa: AuthAdminService) { }
  public a!: admin;
  ngOnInit(): void {
    this.check_acess();

  }

  public dec(): void {
    if (window.confirm(' Are you sure to Log Out ?')) {
      localStorage.setItem("isloggedIn", "false");
      localStorage.removeItem("id_admin");
      this.router.navigate(['/']);
    }
  }
  public check_acess(): void {
    const acc = localStorage.getItem("isloggedIn")
    if (acc == "false") { this.router.navigate(['/ad']); }
    else {
      this.get_admin();
    }
  }

  public get_admin(): void {

    const id = Number(localStorage.getItem("id_admin"));
    this.sa.get_admin(id).subscribe(
      (response: admin) => {
        this.a = response;
        console.log(this.a);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }
  ch = "incorect mot de passe"
  test_mdp = true;
  affiche = false;
  aff = false;
  public verif(a: admin) {
    var mdp = (<HTMLInputElement>document.getElementById("mdp")).value
    console.log(mdp);
    if (mdp == a.mdp_admin) {
      this.affiche = true;
      this.aff = true;
      this.test_mdp = true;
    }
    else {
      this.test_mdp = false;
      this.affiche = false;
    }
  }
  format_pwd = true;
  meme_mdp = true;
  public change(a: admin) {
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
    a.mdp_admin = nv_mdp;
    console.log(a);
    this.sa.update_mdp_admin(a).subscribe(
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

hide()
{
  let element:HTMLElement = document.getElementById('r') as HTMLElement;
  element.click();
}

  retour() {
    this.router.navigate(['/iu']);
  }
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
}
