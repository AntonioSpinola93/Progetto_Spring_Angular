package com.alessandro.spring.datajpa.dto;

import java.util.List;

import com.alessandro.spring.datajpa.model.Contatto;
//Creazione di una DTO
public class ContattoDTO {

    private Long id;
    private String nome;
    private String email;
    private String richiesta;
    private String sesso;
    private String dataDiNascita;
    private String codiceFiscale;

    // Costruttore
    public ContattoDTO() {
    }

    // Getter e Setter
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

	public List<Contatto> getContatti() {
		// TODO Auto-generated method stub
		return null;
	}
}
