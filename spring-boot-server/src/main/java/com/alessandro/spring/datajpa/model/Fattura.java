package com.alessandro.spring.datajpa.model;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Fattura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String numero;
    
    @ManyToOne
    @JoinColumn(name = "utente_id")
    private Utente utente;
    
    @OneToOne(mappedBy = "fattura")
    private StatoFattura statoFattura;
}
