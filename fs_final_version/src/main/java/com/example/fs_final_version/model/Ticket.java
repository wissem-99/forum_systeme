package com.example.fs_final_version.model;

import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.persistence.*;
import java.io.File;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity(name = "Ticket")
@Table(name =" Ticket")
public class Ticket implements Serializable {
    @Id
    @Column
    int num_tic;
    @Column
    String sujet;
    @Column
    String contenu;
    @Column
    String etat;
    @Column
    int nb_com;
    @Column
    Date date_creation;
    @Column
    int id_utl;
    @Column(length = 3)
    String Valide;
    @ManyToOne
    @JoinColumn(name = "id_utl", referencedColumnName = "id_utl", updatable = false, nullable = false, insertable = false)
    Utilisateur utilisateur;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "num_tic", referencedColumnName = "num_tic" , updatable = false, nullable = false, insertable = false)
    private List<files> files;

    public List<files> getFiles() {
        return files;
    }

    public void setFiles(List<files> files) {
        this.files = files;
    }
    /*@OneToOne(cascade = CascadeType.ALL)*/
   /* private files f;*/


    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public int getNum_tic() {
        return num_tic;
    }

    public void setNum_tic(int num_tic) {
        this.num_tic = num_tic;
    }

    public String getSujet() {
        return sujet;
    }

    public void setSujet(String sujet) {
        this.sujet = sujet;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }



    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public int getNb_com() {
        return nb_com;
    }

    public void setNb_com(int nb_com) {
        this.nb_com = nb_com;
    }

    public Date getDate_creation() {
        return date_creation;
    }

    public void setDate_creation(Date date_creation) {
        this.date_creation = date_creation;
    }

    public int getId_utl() {
        return id_utl;
    }

    public void setId_utl(int id_utl) {
        this.id_utl = id_utl;
    }

    public String getValide() {
        return Valide;
    }

    public void setValide(String valide) {
        Valide = valide;
    }
}

