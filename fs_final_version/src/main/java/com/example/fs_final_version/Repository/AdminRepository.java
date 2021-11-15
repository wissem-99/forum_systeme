package com.example.fs_final_version.Repository;

import com.example.fs_final_version.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdminRepository extends JpaRepository<Admin,Integer> {
    @Query("select count(a) from Admin a where a.email_admin= ?1 and a.mdp_admin= ?2")
   int check(String email , String mdp);

    @Query("select a.id_admin from Admin a where a.email_admin= ?1 ")
    int get_id(String email);

    @Query("select count(a) from Admin a where a.email_admin= ?1")
    int verif_admin(String em);

    @Query("select a from Admin a where a.email_admin= ?1")
    Admin get_admin(String em);
}
