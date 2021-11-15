package com.example.fs_final_version.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table
public class Admin implements Serializable {
   @Id
   @Column
   private  int id_admin;
   @Column
   private  String nom_admin;
   @Column
   private String prenom_admin;
   @Column
   private String email_admin;
   @Column
   private  String mdp_admin;

   public Admin(int id_admin, String nom_admin, String prenom_admin, String email_admin, String mdp_admin) {
      this.id_admin = id_admin;
      this.nom_admin = nom_admin;
      this.prenom_admin = prenom_admin;
      this.email_admin = email_admin;
      this.mdp_admin = mdp_admin;
   }

   public Admin() {
   }

   @Override
   public String toString() {
      return "Admin{" +
              "id_admin=" + id_admin +
              ", nom_admin='" + nom_admin + '\'' +
              ", prenom_admin='" + prenom_admin + '\'' +
              ", email_admin='" + email_admin + '\'' +
              ", mdp_admin='" + mdp_admin + '\'' +
              '}';
   }

   public int getId_admin() {
      return id_admin;
   }

   public void setId_admin(int id_admin) {
      this.id_admin = id_admin;
   }

   public String getNom_admin() {
      return nom_admin;
   }

   public void setNom_admin(String nom_admin) {
      this.nom_admin = nom_admin;
   }

   public String getPrenom_admin() {
      return prenom_admin;
   }

   public void setPrenom_admin(String prenom_admin) {
      this.prenom_admin = prenom_admin;
   }

   public String getEmail_admin() {
      return email_admin;
   }

   public void setEmail_admin(String email_admin) {
      this.email_admin = email_admin;
   }

   public String getMdp_admin() {
      return mdp_admin;
   }

   public void setMdp_admin(String mdp_admin) {
      this.mdp_admin = mdp_admin;
   }
}
