package com.example.fs_final_version.Controller;


import com.example.fs_final_version.Service.UtilisateurService;
import com.example.fs_final_version.model.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UtilisateurController {
    @Autowired
    UtilisateurService utilisateurService;

    @GetMapping("/utilisateurs")
    private List<Utilisateur> get()
    { return (List<Utilisateur>) utilisateurService.getAllUtilisateur();
    }


    @PostMapping("/ajout_utl")
 private  int ins_uti(@RequestBody Utilisateur utilisateur)
    {
        int ex =200;
        ex=utilisateurService.check_email_existe(utilisateur);
         if (ex==0)
         { utilisateurService.save(utilisateur);
         }
        return ex;
    }

    @PostMapping("/check_utl")
    private int ex (@RequestBody Utilisateur u)
    {
       int ex=404;
       ex=utilisateurService.check(u);
        return ex;
    }

    @GetMapping("/check_email")
    private  int ex_email(@RequestBody Utilisateur u)
    {
        int ex=404;
        ex=utilisateurService.check_email(u);
        return ex;
    }

    @PostMapping("/update_mdp_user")
    private int  update(@RequestBody Utilisateur u)
    {
        utilisateurService.update_mdp(u);
        return 0;
    }


    @PutMapping("/update_utl")
    private  int update_utl (@RequestBody Utilisateur u)
    {
     return utilisateurService.update_utl(u);
    }


    @DeleteMapping("/delete_utl/{id}")
    public int deleteEmployee(@PathVariable("id") int id)
    {
    utilisateurService.del_utl(id);
    return 0;
    }
 @GetMapping("/get_id_utl/{email}")
    public int get_id (@PathVariable("email") String email)
 {
     return  utilisateurService.get_id(email);
 }

 @GetMapping("get_user/{id}")
public  Utilisateur get(@PathVariable("id") int id)
 { return utilisateurService.find(id);
 }

 @GetMapping("verif_user/{em}")
    public int  verif_user(@PathVariable("em") String em)
 {
     return utilisateurService.verif_user(em);
 }


}
