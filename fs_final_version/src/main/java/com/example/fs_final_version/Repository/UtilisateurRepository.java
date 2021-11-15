package com.example.fs_final_version.Repository;

import com.example.fs_final_version.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UtilisateurRepository extends JpaRepository<Utilisateur,Integer> {
    @Query("select count(u) from Utilisateur u where u.email_utl = ?1 and u.mdp_utl = ?2")
    int check( String email, String mdp);

    @Query("select count(u) from Utilisateur u where u.email_utl = ?1 and u.id_utl= ?2")
    int check_email(String email,int id);

    @Query("select count(u) from Utilisateur u where u.email_utl = ?1")
    int check_email_existe(String email);

    @Query("select u.id_utl from Utilisateur u where u.email_utl=?1")
    int get_id(String email);

    @Query("select u from Utilisateur u where u.email_utl=?1")
    Utilisateur get_user(String email);




}