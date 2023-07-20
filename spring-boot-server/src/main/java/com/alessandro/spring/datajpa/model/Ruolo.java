package com.alessandro.spring.datajpa.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Ruolo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nome;
    
    @OneToOne
    @JoinColumn(name = "utente_id")
    private Utente utente;
}
