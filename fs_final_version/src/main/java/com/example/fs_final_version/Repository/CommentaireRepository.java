package com.example.fs_final_version.Repository;

import com.example.fs_final_version.model.Commentaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentaireRepository extends JpaRepository<Commentaire, Integer> {
    @Query("select co from Commentaire co where co.num_tic = ?1")
    public List<Commentaire> get_com_tic(int num_tic);

    @Query("select concat (u.nom_utl,' ' ,u.prenom_utl) from Utilisateur u , Commentaire c where u.id_utl=c.id_utl and c.id_utl!=?1 and c.num_tic=?2 order by c.num_com")
    public List<String> get_nom_com(int id,int num_tic);

    @Query("select co from Commentaire co where co.num_tic = ?1 and co.id_utl != ?2")
    public List<Commentaire> get_com_tic_not_me(int num_tic ,int id);

    @Query("select co from Commentaire co where co.num_tic = ?1 and co.id_utl = ?2")
    public List<Commentaire> get_com_my(int num_tic ,int id);
}
