import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthAdminComponent } from './auth-admin/auth-admin.component';
import { HttpClientModule } from '@angular/common/http'
import { AuthAdminService } from './services/auth-admin.service';
import { GererUtilisateurComponent } from './gerer-utilisateur/gerer-utilisateur.component';
import { NgForm } from '@angular/forms';
import { AuthUserComponent } from './auth-user/auth-user.component';

import { AdminEspaceComponent } from './admin-espace/admin-espace.component';
import { FootorComponent } from './footor/footor.component';
import { NavbarPrincipaleComponent } from './navbar-principale/navbar-principale.component';
import { MenuComponent } from './menu/menu.component';
import { DescComponent } from './desc/desc.component';
import { UserEspaceComponent } from './user-espace/user-espace.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { ChatComponent } from './chat/chat.component';

import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { CommentaireComponent } from './commentaire/commentaire.component';

import { TicketsChatComponent } from './tickets-chat/tickets-chat.component';

const appRoutes :Routes= [

  {   path :'auth_admin' , component:AuthAdminComponent},
  {path :"iu" ,component: GererUtilisateurComponent},
 
  {path: 'auth_user' , component:AuthUserComponent},
 
  {path :' footor' , component:FootorComponent},
  {path : 'admin_espace' , component:AdminEspaceComponent},
  {path : 'navbar_principal' , component:NavbarPrincipaleComponent},
  {path :'' , component:MenuComponent},
  {path :'eu', component:UserEspaceComponent},
  {path :'ad' , component:AccessDeniedComponent},
  {path: 'profil_admin' , component:ProfilAdminComponent},
  {path : 'profil_user', component:ProfilUserComponent},
  {path : "chat" , component:ChatComponent},
  {path : "com" , component:CommentaireComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    AuthAdminComponent,
    GererUtilisateurComponent,
    AuthUserComponent,

    AdminEspaceComponent,
    NavbarPrincipaleComponent,
    FootorComponent,
    MenuComponent,
    DescComponent,
    UserEspaceComponent,
    AccessDeniedComponent,
    ProfilAdminComponent,
    ProfilUserComponent,
    ChatComponent, 
    MyTicketsComponent,
    CommentaireComponent,
    TicketsChatComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  FormsModule,

    RouterModule.forRoot(appRoutes,
      { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
