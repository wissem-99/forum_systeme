package com.example.fs_final_version.Service;


import com.example.fs_final_version.Repository.AdminRepository;
import com.example.fs_final_version.model.Admin;
import com.example.fs_final_version.model.Utilisateur;
import com.example.fs_final_version.service_email.send_email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    AdminRepository  adminRepository;

    @Autowired
   send_email send_email;

public int check(Admin admin)
{
    return adminRepository.check(admin.getEmail_admin(),admin.getMdp_admin());
}

public Admin get_admin(int id)
{
    return  adminRepository.findById(id).get();
}

public int get_id (String em)
{
    return  adminRepository.get_id(em);
}

public  int verif_admin(String em)
{
    if (adminRepository.verif_admin(em)==1)
    {   Admin a;
        a=adminRepository.get_admin(em);
        String sujet;
        sujet="Votre Mot de passe de compte Admin : \n"+a.getMdp_admin() ;
        send_email.send_user_mail_ajoute(a.getEmail_admin(),sujet);
    }
   return  adminRepository.verif_admin(em);
}

    public void update_mdp (Admin u)
    {
        adminRepository.save(u);


    }

}
