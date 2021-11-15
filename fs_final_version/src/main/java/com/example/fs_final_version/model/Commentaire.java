package com.example.fs_final_version.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
public class Commentaire {

    @Id
    @Column
    int num_com;
    @Column
    String com;
    @Column
    Date dh_com;
    @Column
    int num_tic;
    @Column
    int id_utl;
    @ManyToOne
    @JoinColumn(name = "id_utl", referencedColumnName = "id_utl", updatable = false, nullable = false, insertable = false)
    Utilisateur utilisateur;

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }


    public int getNum_com() {
        return num_com;
    }

    public void setNum_com(int num_com) {
        this.num_com = num_com;
    }

    public String getCom() {
        return com;
    }

    public void setCom(String com) {
        this.com = com;
    }

    public Date getDh_com() {
        return dh_com;
    }

    public void setDh_com(Date dh_com) {
        this.dh_com = dh_com;
    }

    public int getNum_tic() {
        return num_tic;
    }

    public void setNum_tic(int num_tic) {
        this.num_tic = num_tic;
    }

    public int getId_utl() {
        return id_utl;
    }

    public void setId_utl(int id_utl) {
        this.id_utl = id_utl;
    }
}