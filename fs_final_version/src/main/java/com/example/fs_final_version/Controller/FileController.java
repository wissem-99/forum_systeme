package com.example.fs_final_version.Controller;

import com.example.fs_final_version.Service.FileStorageService;
import com.example.fs_final_version.Service.TicketService;
import com.example.fs_final_version.message.ResponseFile;
import com.example.fs_final_version.message.ResponseMessage;
import com.example.fs_final_version.model.Ticket;
import com.example.fs_final_version.model.files;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Controller
public class FileController {

    @Autowired
    private FileStorageService storageService;
    @Autowired
    TicketService ticketService;


    @PostMapping("/upload/{id}")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable("id") int id) {
        String message = "";
        try {
            storageService.store(file,id);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            int num_tic = ticketService.get_max(id);
            Ticket t = ticketService.get_one_ticket(num_tic);
            t.setValide("oui");
            ticketService.update(t);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

    @GetMapping("/test_files")
    public String get_test_files() {
        return storageService.getFile(5).getFile_dno();
    }

    @GetMapping("/files")
 public ResponseEntity<List<ResponseFile>> getListFiles() {

        List<ResponseFile> files = storageService.getAllFiles().map(dbFile -> {
            String f = Base64.getEncoder().encodeToString(dbFile.getData());
            String s = new String(dbFile.getData(), StandardCharsets.UTF_8);
            String [] yy= s.split("\n");
           /* return new ResponseFile(
                    dbFile.getName(),
                    fileDownloadUri,
                    s,
                    dbFile.getData().length, dbFile.getData()
                    );
        }).collect(Collectors.toList());*/
            return new ResponseFile(yy);
        }).collect(Collectors.toList());


        return ResponseEntity.status(HttpStatus.OK).body(files);
    }

    @GetMapping("/files/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable int id) {

        files fileDB = storageService.getFile(id);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
                .body(fileDB.getData());
    }


}


