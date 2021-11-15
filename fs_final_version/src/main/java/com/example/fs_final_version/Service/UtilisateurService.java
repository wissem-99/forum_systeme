package com.example.fs_final_version.Service;

import com.example.fs_final_version.Repository.UtilisateurRepository;
import com.example.fs_final_version.model.Utilisateur;
import com.example.fs_final_version.service_email.send_email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class UtilisateurService {
    @Autowired
    UtilisateurRepository utilisateurRepository;

    @Autowired
    send_email send_email;
    public  List<Utilisateur> getAllUtilisateur()
    {
        List<Utilisateur> utilisateurs = new ArrayList<>();
        utilisateurRepository.findAll().forEach(utilisateurs1-> utilisateurs.add(utilisateurs1));
        return utilisateurs;
    }

    public void save(Utilisateur u)
    {
        Date d= new Date();
        u.setDate_rej(d);
        u.setNb_ticket(0);
        u.setMdp_utl(UUID.randomUUID().toString().substring(0,7));
        utilisateurRepository.save(u);
        String sujet;
        sujet=" Coorodonées de votre nouvelle compte Utilisateur sur le plateform Forum Systeme\n login : "+u.getEmail_utl()+"\n Mot de passe : "+u.getMdp_utl() +"\n http://localhost:4200/auth_user";
        send_email.send_user_mail_ajoute(u.getEmail_utl(),sujet);
    }
    public int check(Utilisateur u)
    {
        return utilisateurRepository.check(u.getEmail_utl(),u.getMdp_utl());

    }

    public Utilisateur find(int i)
    {
        return  utilisateurRepository.findById(i).get();

    }

    public int update_utl(Utilisateur u)
    {
        int res=0;
        res=check_email(u);
        int mail_existe;
        mail_existe=check_email_existe(u);
        if ((res==1 && mail_existe==1) || (res==0 && mail_existe==0))
        {utilisateurRepository.save(u);}
        return  res+mail_existe;
    }
    public void update_mdp (Utilisateur u) {
        utilisateurRepository.save(u);
    }

    public  int check_email(Utilisateur u)
    {
        return utilisateurRepository.check_email(u.getEmail_utl(),u.getId_utl());
    }
    public  int check_email_existe(Utilisateur u)
    {
        return utilisateurRepository.check_email_existe(u.getEmail_utl());
    }

    public void del_utl(int id)
    {
        utilisateurRepository.deleteById(id);

    }

    public int get_id( String em)
    {
     return    utilisateurRepository.get_id(em);
    }

    public void plus_nb_ticket(Utilisateur u)
    {

        utilisateurRepository.save(u);
    }
  public  int verif_user(String em)
  {
      if (utilisateurRepository.check_email_existe(em)==1)
      {   Utilisateur u;
          u=utilisateurRepository.get_user(em);
          String sujet;
          sujet="Votre Mot de passe de compte Utilisateur :\n "+u.getMdp_utl() ;
          send_email.send_user_mail_ajoute(u.getEmail_utl(),sujet);
      }
      return  utilisateurRepository.check_email_existe(em);
  }

}
