package com.example.fs_final_version.Controller;


import com.example.fs_final_version.Service.TicketService;
import com.example.fs_final_version.model.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TicketController {

    @Autowired
    TicketService ticketService;

    @GetMapping("/all_ticket")
    public List<Ticket>  get_ticket()
    {
        return (List<Ticket>) ticketService.getallTicket();
    }

    @PostMapping("/ajout_ticket")
    public int ajout_ticket(@RequestBody  Ticket t)
    {
      return   ticketService.save_ticket(t);
    }

    @GetMapping("/get_one_ticket/{id}")
    public Ticket get_one_ticket(@PathVariable int id)
    {
        return  ticketService.get_one_ticket(id);
    }

    @DeleteMapping("/delete_tic/{num_tic}/{id}")
    public int  delete_ticket(@PathVariable int num_tic, @PathVariable int id )
    {
        ticketService.delete_ticket(num_tic,id);
        return 0;
    }

    @PutMapping("/update_etat")
    public  int update_tic (@RequestBody Ticket t)
    {   ticketService.update(t);
        return 0;
    }

    @GetMapping("/get_my/{id}")
    public List<Ticket> get_my(@PathVariable int id)
    {
         return ticketService.get_my(id);
    }


    @GetMapping("/get_all/{id}")
    public List<Ticket> get_all(@PathVariable int id)
    {
        return ticketService.get_all(id);
    }

    @GetMapping("/get_my_type/{id}/{etat}")
    public List<Ticket> get_my_type( @PathVariable int id,@PathVariable String etat )
    {
        return ticketService.get_my_type(id,etat);
    }

    @GetMapping("/get_type/{id}/{etat}")
    public List<Ticket> get_type(@PathVariable int id,@PathVariable String etat)
    {
        return ticketService.get_type(id,etat);
    }

 @GetMapping("/get_nom_ticket/{id}")
         public List<String> get_nom(@PathVariable int id)
 {
         return ticketService.get_nom(id);
 }

 @GetMapping("/get_max/{id}")
    public  int get_max(@PathVariable int id)
 {
    return ticketService.get_max(id);
 }


   @DeleteMapping("/nettoyer/{id}")
    public int nettoyer(@PathVariable int id )
    {
     ticketService.nettoyer(id);
     return 0;
    }
}







