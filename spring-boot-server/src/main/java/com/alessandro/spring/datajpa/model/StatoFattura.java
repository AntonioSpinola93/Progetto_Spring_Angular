package com.alessandro.spring.datajpa.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class StatoFattura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String stato;
    
    @OneToOne
    @JoinColumn(name = "fattura_id")
    private Fattura fattura;
}
