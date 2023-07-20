package com.alessandro.spring.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alessandro.spring.datajpa.model.StatoFattura;

public interface StatoFatturaRepository extends JpaRepository<StatoFattura, Long> {
    // No additional custom methods for this repository
}
