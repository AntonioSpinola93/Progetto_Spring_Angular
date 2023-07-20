package com.alessandro.spring.datajpa.projection;


public class ContattoProjectionImpl implements ContattoProjection {
    private final Long id;
    private final String nome;
    private final String email;
    private final long numeroContattiInseriti;

    public ContattoProjectionImpl(Long id, String nome, String email, long numeroContattiInseriti) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.numeroContattiInseriti = numeroContattiInseriti;
    }

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public String getNome() {
        return nome;
    }

    @Override
    public String getEmail() {
        return email;
    }

    @Override
    public long getNumeroContattiInseriti() {
        return numeroContattiInseriti;
    }
}

