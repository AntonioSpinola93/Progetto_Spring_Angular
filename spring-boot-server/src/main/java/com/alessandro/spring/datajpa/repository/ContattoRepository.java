package com.alessandro.spring.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.alessandro.spring.datajpa.model.Contatto;
import com.alessandro.spring.datajpa.projection.ContattoProjection;
import com.alessandro.spring.datajpa.service.FiltriContatti;

import java.util.List;

@Repository
public interface ContattoRepository extends JpaRepository<Contatto, Long> {

    @Query("SELECT c FROM Contatto c WHERE (:nome IS NULL OR c.nome = :#{#filtriContatti.nome}) AND (:email IS NULL OR c.email = :#{#filtriContatti.email})")
    List<Contatto> filtrareContatti(FiltriContatti filtriContatti);

    List<ContattoProjection> findAllBy();
    
    // Effettuo il calcolo e restituisco la lista calcolata 
    @Query("SELECT new com.alessandro.spring.datajpa.projection.ContattoProjectionImpl(c.id, c.nome, c.email, COUNT(c)) " +
            "FROM Contatto c GROUP BY c.id, c.nome, c.email")
    List<ContattoProjection> findAllWithNumeroContattiInseriti();

}
