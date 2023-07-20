package com.alessandro.spring.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.alessandro.spring.datajpa.model.Fattura;

import java.util.List;

public interface FatturaRepository extends JpaRepository<Fattura, Long> {
    // Custom method to retrieve the status of a specific invoice
	/*@Query("SELECT f FROM Fattura f JOIN f.statoFattura sf WHERE sf.stato = :stato")
	List<Fattura> findFattureByStato(@Param("stato") String stato);

	
    @Query("SELECT f FROM Fattura f WHERE f.stato = :stato")
    List<Fattura> findAllByStato(@Param("stato") String stato);
*/
	
    @Query("SELECT SUM(f.totale) FROM Fattura f WHERE f.utente.id = :userId")
    Long getTotalFattureForUser(@Param("userId") Long userId);
	
}
