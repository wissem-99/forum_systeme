package com.example.fs_final_version.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.*;

@Entity
@Table
public class Utilisateur  {
    @Id
    @Column
    private int id_utl;
    @Column
    private String nom_utl;
    @Column
    private String prenom_utl;
    @Column
    private  String email_utl;
    @Column
    private String poste;
    @Column
    private int nb_ticket;
    @Column
    private Date date_rej;
    @Column
    private String mdp_utl;
/*
    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_utl", referencedColumnName = "id_utl")
    private List<Ticket> tickets;

*/
    public Utilisateur() {
    }
    public String getPoste() {
        return poste;
    }

    public void setPoste(String poste) {
        this.poste = poste;
    }

    public String getMdp_utl() {
        return mdp_utl;
    }



    public String getMdp_utl(String s) {
        return mdp_utl;
    }

    public void setMdp_utl(String mdp_utl) {
        this.mdp_utl = mdp_utl;
    }

    public int getId_utl() {
        return id_utl;
    }

    public void setId_utl(int id_utl) {
        this.id_utl = id_utl;
    }

    public String getNom_utl() {
        return nom_utl;
    }

    public void setNom_utl(String nom_utl) {
        this.nom_utl = nom_utl;
    }

    public String getPrenom_utl() {
        return prenom_utl;
    }

    public void setPrenom_utl(String prenom_utl) {
        this.prenom_utl = prenom_utl;
    }

    public String getEmail_utl() {
        return email_utl;
    }

    public void setEmail_utl(String email_utl) {
        this.email_utl = email_utl;
    }

    public int getNb_ticket() {
        return nb_ticket;
    }

    public void setNb_ticket(int nb_ticket) {
        this.nb_ticket = nb_ticket;
    }

    public Date getDate_rej() {
        return date_rej;
    }

    public void setDate_rej(Date date_rej) {
        this.date_rej = date_rej;
    }
}