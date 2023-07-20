
package com.alessandro.spring.datajpa.classi;

import com.alessandro.spring.datajpa.dto.CustomerDto;
import com.alessandro.spring.datajpa.classi.Customer;

public class CustomerMapper {

    public CustomerDto toDto(Customer customer) {
        CustomerDto dto = new CustomerDto();
        dto.setId(customer.getId());
        dto.setName(customer.getName());
        dto.setEmail(customer.getEmail());
        // Imposta gli altri attributi del DTO, se presenti
        return dto;
    }
    
    public Customer toEntity(CustomerDto dto) {
        Customer customer = new Customer();
        customer.setId(dto.getId());
        customer.setName(dto.getName());
        customer.setEmail(dto.getEmail());
        // Imposta gli altri attributi dell'entità, se presenti
        return customer;
    }
}
