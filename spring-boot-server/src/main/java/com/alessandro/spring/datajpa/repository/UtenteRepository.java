package com.alessandro.spring.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.alessandro.spring.datajpa.model.Utente;

public interface UtenteRepository extends JpaRepository<Utente, Long> {
    // Custom method to retrieve the role of a specific user
    @Query("SELECT u.ruolo.nome FROM Utente u WHERE u.id = :userId")
    String findRuoloByUserId(Long userId);
}
