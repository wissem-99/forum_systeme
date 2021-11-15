package com.example.fs_final_version.Service;


import com.example.fs_final_version.Repository.TicketRepository;
import com.example.fs_final_version.model.Ticket;
import com.example.fs_final_version.model.Utilisateur;
import org.springframework.beans.NullValueInNestedPathException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.support.NullValue;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.Multipart;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TicketService {

    @Autowired
    TicketRepository ticketRepository;
    @Autowired
    UtilisateurService utilisateurService;


    public  List<Ticket> getallTicket()
    {
        List<Ticket> tickets = new ArrayList<>();
        ticketRepository.findAll().forEach(tickets1 -> tickets.add(tickets1) );
        return tickets;
    }
     public void update (Ticket t)
     {
         ticketRepository.save(t);
     }
    public int save_ticket(Ticket t )
    {
        t.setNb_com(0);
        t.setEtat("en_cours");
        t.setValide("non");
        Date d= new Date();
        t.setDate_creation(d);
        ticketRepository.save(t);
       Utilisateur u = utilisateurService.find(t.getId_utl());
       int nvb=u.getNb_ticket()+1;
       u.setNb_ticket(nvb);
       utilisateurService.plus_nb_ticket(u);
        Utilisateur y = utilisateurService.find(t.getId_utl());
       return y.getNb_ticket();
    }


    public void  delete_ticket(int t , int id)
    {
        Utilisateur u = utilisateurService.find(id);
        int nvb=u.getNb_ticket()-1;
        u.setNb_ticket(nvb);
        utilisateurService.plus_nb_ticket(u);
        ticketRepository.deleteById(t);

    }

    public List<Ticket> get_my(int id_utl)
    {
        List<Ticket> tickets = ticketRepository.get_my(id_utl);
        return tickets;
    }
    public List<Ticket> get_my_type(int id_utl, String etat)
    {
        List<Ticket> tickets = ticketRepository.get_my_type(id_utl,etat);
        return tickets;
    }
    public List<Ticket> get_type(int id_utl ,String etat)
    {
        List<Ticket> tickets = ticketRepository.get_type(id_utl,etat);
        return tickets;
    }

    public List<Ticket> get_all(int id_utl)
    {
      return ticketRepository.get_all(id_utl);

    }

    public  Ticket get_one_ticket(int id)
    {
        return ticketRepository.findById(id).get();
    }

    public  void update_tic_com( Ticket t)
    {
        ticketRepository.save(t);
    }
    public List<String> get_nom(int id_utl)
    {
        return  ticketRepository.get_nom(id_utl);
    }

    public  int get_max(int id)
    {return ticketRepository.get_max(id);}

    public  int get_count(int id)
    {return ticketRepository.get_count(id);}

    public  void  nettoyer(int id)
    {   if (ticketRepository.get_count(id)==0)
    {}
        else {
        int before = ticketRepository.get_max(id);
        ticketRepository.nettoyer("non", id);
        if (ticketRepository.get_count(id)==0 && before!=ticketRepository.get_count(id) )
        {
            Utilisateur u = utilisateurService.find(id);
            int nvb = u.getNb_ticket();
            int x = nvb - 1;
            u.setNb_ticket(x);
            utilisateurService.plus_nb_ticket(u);
        }
        else
        {
        int after = ticketRepository.get_max(id);
        if (before != after) {
            Utilisateur u = utilisateurService.find(id);
            int nvb = u.getNb_ticket();
            int x = nvb - 1;
            u.setNb_ticket(x);
            utilisateurService.plus_nb_ticket(u);
        }
    }}
    }
}
