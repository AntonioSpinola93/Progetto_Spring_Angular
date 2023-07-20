package com.alessandro.spring.datajpa.classi;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@ApiModel(description = "Dettagli del cliente")
@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(notes = "ID univoco del cliente")
    private Long id;

    @Column(nullable = false)
    @ApiModelProperty(notes = "Nome del cliente")
    private String name;

    @Column(nullable = false)
    @ApiModelProperty(notes = "Email del cliente")
    private String email;

    @Column(nullable = false)
    @ApiModelProperty(notes = "Genere del cliente")
    private String gender;

    // Altri attributi, costruttori

    // Metodi getter e setter per gli attributi

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    // Altri metodi getter e setter per gli altri attributi
}
