package com.example.fs_final_version.Repository;

import com.example.fs_final_version.model.files;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FileDBRepository extends JpaRepository<files,Integer> {

}