package com.example.fs_final_version.Controller;


import com.example.fs_final_version.Service.AdminService;
import com.example.fs_final_version.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdminController {
    @Autowired
    AdminService adminService;

    @PostMapping("/check_admin")
    private int existe(@RequestBody Admin admin)
    {
        int ex=404;
        ex=adminService.check(admin);
        return  ex;
    }
@GetMapping("/get_admin/{id}")
    private Admin get(@PathVariable("id") int id ) {

       return adminService.get_admin(id);

    }

    @GetMapping("/get_id_admin/{em}")
    private  int get_id_admin (@PathVariable("em") String em)
    {
        return adminService.get_id(em);
    }

    @GetMapping("/verif_admin/{em}")
    private  int verif_admin (@PathVariable("em") String em)
    {
        return adminService.verif_admin(em);
    }

    @PostMapping("/update_mdp_admin")
    private int update_mdp_admin(@RequestBody  Admin u)
    {
        adminService.update_mdp(u);
        return 0;
    }


}

