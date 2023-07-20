package com.alessandro.spring.datajpa.model;

import javax.persistence.*;

@Entity
public class Contatto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String richiesta;
    private String sesso;
    private String dataDiNascita;
    private String codiceFiscale;
    private int numeroContattiInseriti;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Contatto() {
    }

    public Contatto(String nome, String email, String richiesta, String sesso, String dataDiNascita,
                    String codiceFiscale, int numeroContattiInseriti) {
        this.nome = nome;
        this.email = email;
        this.richiesta = richiesta;
        this.sesso = sesso;
        this.dataDiNascita = dataDiNascita;
        this.codiceFiscale = codiceFiscale;
        this.numeroContattiInseriti = numeroContattiInseriti;
    }

    // Getter and Setter methods

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRichiesta() {
        return richiesta;
    }

    public void setRichiesta(String richiesta) {
        this.richiesta = richiesta;
    }

    public String getSesso() {
        return sesso;
    }

    public void setSesso(String sesso) {
        this.sesso = sesso;
    }

    public String getDataDiNascita() {
        return dataDiNascita;
    }

    public void setDataDiNascita(String dataDiNascita) {
        this.dataDiNascita = dataDiNascita;
    }

    public String getCodiceFiscale() {
        return codiceFiscale;
    }

    public void setCodiceFiscale(String codiceFiscale) {
        this.codiceFiscale = codiceFiscale;
    }

    public int getNumeroContattiInseriti() {
        return numeroContattiInseriti;
    }

    public void setNumeroContattiInseriti(int numeroContattiInseriti) {
        this.numeroContattiInseriti = numeroContattiInseriti;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Contatto [id=" + id + ", nome=" + nome + ", email=" + email + ", richiesta=" + richiesta + ", sesso="
                + sesso + ", dataDiNascita=" + dataDiNascita + ", codiceFiscale=" + codiceFiscale + ", numeroContattiInseriti=" + numeroContattiInseriti + "]";
    }
}
