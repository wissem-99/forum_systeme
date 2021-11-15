package com.example.fs_final_version.Service;


import com.example.fs_final_version.Repository.FileDBRepository;
import com.example.fs_final_version.model.Ticket;
import com.example.fs_final_version.model.files;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;

@Service
public class FileStorageService {

    @Autowired
    private FileDBRepository fileDBRepository;
       @Autowired
       private TicketService ticketService;
    @Autowired
    UtilisateurService utilisateurService;
    public files store(MultipartFile file, int id) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        String fileDownloadUri = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("/files/")
                .toUriString();
       int  num_tic=ticketService.get_max(id);
        files FileDB = new files(fileName, file.getContentType(), file.getBytes(),num_tic,fileDownloadUri);
        return fileDBRepository.save(FileDB);
    }

    public files getFile(int id) {
        return fileDBRepository.findById(id).get();
    }

    public Stream<files> getAllFiles() {
        return fileDBRepository.findAll().stream();
    }



}