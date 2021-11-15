package com.example.fs_final_version.Repository;

import com.example.fs_final_version.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket,Integer> {
    @Query("select t from Ticket t where t.id_utl= ?1")
    List<Ticket> get_my(int id_utl);

    @Query("select t from Ticket t where t.id_utl!= ?1")
    List<Ticket> get_all(int id_utl);

    @Query("select t from Ticket t where t.id_utl= ?1 and t.etat= ?2")
    List<Ticket> get_my_type(int id_utl,String etat);

    @Query("select t from Ticket t where t.id_utl!= ?1 and t.etat= ?2")
    List<Ticket> get_type(int id_utl,String etat);

    @Query("select concat (u.nom_utl,' ' ,u.prenom_utl) from Utilisateur u, Ticket t where t.id_utl!= ?1 and u.id_utl=t.id_utl order by t.num_tic")
    List<String> get_nom (int id_utl);


    @Query("select count(t.num_tic) from Ticket t where t.id_utl=?1")
    int get_count(int id);

    @Query("select max(t.num_tic) from Ticket t where t.id_utl=?1")
    int get_max(int id);

    @Transactional
    @Modifying
    @Query("delete from Ticket t where t.Valide= ?1 and t.id_utl= ?2")
     void nettoyer(String y,int id);

}
