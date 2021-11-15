package com.example.fs_final_version.Controller;


import com.example.fs_final_version.Service.CommentaireService;
import com.example.fs_final_version.Service.TicketService;
import com.example.fs_final_version.model.Commentaire;
import com.example.fs_final_version.model.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentaireController {

    @Autowired
    CommentaireService commentaireService;
    @Autowired
    TicketService ticketService;

    @GetMapping("/all_com")
    public List<Commentaire> getallcommentaires()
    {
        return commentaireService.getallcommentaires();
    }

    @DeleteMapping("/delete_com/{num_com}/{num_tic}")
    public int delete_commentaire(@PathVariable int num_com , @PathVariable int num_tic)
    {Ticket t = ticketService.get_one_ticket(num_tic);
        int nv=t.getNb_com()-1;
        t.setNb_com(nv);
        ticketService.update_tic_com(t);
        commentaireService.delete_com(num_com);
        return 0;
    }

    @PostMapping("/add_com")
    public  int add_commentaire(@RequestBody Commentaire c)
    { commentaireService.save_com(c);
        Ticket t = ticketService.get_one_ticket(c.getNum_tic());
        int nv=t.getNb_com()+1;
        t.setNb_com(nv);
        ticketService.update_tic_com(t);
        return 0;
    }

    @GetMapping("/get_com_tic/{num_tic}")
    public List<Commentaire> get_com_tic(@PathVariable int num_tic)
    {
        return commentaireService.get_com_tic(num_tic);
    }

    @GetMapping("get_nom_com/{id}/{num_tic}")
    public List<String> get_nom_com(@PathVariable int id,@PathVariable int num_tic)
    {
        return  commentaireService.get_nom_com(id,num_tic);
    }
    @GetMapping("/get_com_tic_not_me/{num_tic}/{id}")
    public List<Commentaire> get_com_tic_not_me(@PathVariable int num_tic,@PathVariable int id)
    {
        return commentaireService.get_com_tic_not_me(num_tic,id);
    }
    @GetMapping("/get_com_my/{num_tic}/{id}")
    public List<Commentaire> get_com_my(@PathVariable int num_tic,@PathVariable int id)
    {
        return commentaireService.get_com_my(num_tic,id);
    }
}
