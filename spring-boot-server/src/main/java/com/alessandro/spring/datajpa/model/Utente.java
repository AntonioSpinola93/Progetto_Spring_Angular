package com.alessandro.spring.datajpa.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Utente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nome;
    
    @OneToMany(mappedBy = "utente")
    private List<Fattura> fatture;
    
    @OneToOne(mappedBy = "utente")
    private Ruolo ruolo;
}
