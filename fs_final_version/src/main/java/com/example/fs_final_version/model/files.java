package com.example.fs_final_version.model;

import javax.persistence.*;

@Entity
@Table
public class files {
    @Id
    private int id_f;
    @Column
    private String name;
    @Column
    private String type;
    @Column
    private String file_dno;
    @Column
    private int num_tic;

    @Lob
    private byte[] data;



    /*@ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "num_tic", referencedColumnName = "num_tic", updatable = false, nullable = false, insertable = false)
    Ticket ticket;*/


    public files(String name, String type, byte[] data, int num_tic , String file_dno) {
        this.name = name;
        this.type = type;
        this.data = data;
        this.num_tic=num_tic;
        this.file_dno=file_dno;
    }

    public files(String type) {
        this.type = type;
    }

    public files() {
    }
    public String getFile_dno() {
        return  file_dno;
    }

    public void setFile_dno(String file_dno) {
        this.file_dno=file_dno;
    }
    public int getId_f() {
        return id_f;
    }

    public void setId_f(int id_f) {
        this.id_f = id_f;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public int getNum_tic() {
        return num_tic;
    }

    public void setNum_tic(int num_tic) {
        this.num_tic = num_tic;
    }
}
