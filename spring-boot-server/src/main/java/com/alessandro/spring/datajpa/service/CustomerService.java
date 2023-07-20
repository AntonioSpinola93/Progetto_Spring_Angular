package com.alessandro.spring.datajpa.service;

import org.springframework.stereotype.Service;

import com.alessandro.spring.datajpa.classi.Customer;
import com.alessandro.spring.datajpa.classi.NotFoundException;
import com.alessandro.spring.datajpa.repository.CustomerRepository;

@Service
public class CustomerService {
	
    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Customer not found with id: " + id));
    }

    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    // Altri metodi del servizio, se necessario
}
