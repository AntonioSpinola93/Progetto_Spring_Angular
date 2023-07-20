
package com.alessandro.spring.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.alessandro.spring.datajpa.classi.Customer;
//Customer Repository di mapstruct
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // ...
	//Contatore degli utenti maschi 
	@Query("SELECT COUNT(c) FROM Customer c WHERE c.gender = 'M'")
	Long countMaleCustomers();

}
