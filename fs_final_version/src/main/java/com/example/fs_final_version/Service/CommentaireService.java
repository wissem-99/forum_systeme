package com.example.fs_final_version.Service;


import com.example.fs_final_version.Repository.CommentaireRepository;
import com.example.fs_final_version.model.Commentaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CommentaireService {

    @Autowired
    CommentaireRepository commentaireRepository;


    public  List<Commentaire> getallcommentaires()
    {
        List<Commentaire> commentaires = new ArrayList<>();
        commentaireRepository.findAll().forEach(commentaires1->commentaires.add(commentaires1));
        return  commentaires;
    }

    public void save_com( Commentaire c)
    {
     Date d= new Date();
     c.setDh_com(d);
        commentaireRepository.save(c);
    }
    public void delete_com(int nt)
    {
        commentaireRepository.deleteById(nt);
    }

    public List<Commentaire>get_com_tic(int num_tic)
    {
      return  commentaireRepository.get_com_tic(num_tic);
    }
public List<String> get_nom_com(int id ,int num_tic)
    {
      return   commentaireRepository.get_nom_com(id, num_tic);
    }
    public List<Commentaire>get_com_tic_not_me(int num_tic ,int id)
    {
        return  commentaireRepository.get_com_tic_not_me(num_tic,id);
    }

    public List<Commentaire> get_com_my(int num_tic ,int id)
    {
        return commentaireRepository.get_com_my(num_tic, id);
    }
}
