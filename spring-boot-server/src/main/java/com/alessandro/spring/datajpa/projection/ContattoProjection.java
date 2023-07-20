package com.alessandro.spring.datajpa.projection;
//Creazione di una Projection
public interface ContattoProjection {
    Long getId();
    String getNome();
    String getEmail();
    long getNumeroContattiInseriti();
}
