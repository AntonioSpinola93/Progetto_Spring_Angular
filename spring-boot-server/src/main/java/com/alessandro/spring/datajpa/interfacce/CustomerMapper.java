package com.alessandro.spring.datajpa.interfacce;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

import com.alessandro.spring.datajpa.classi.Customer;
import com.alessandro.spring.datajpa.dto.CustomerDto;

@Component
@Mapper
public interface CustomerMapper {
	//Associazione tramite CustomerMapper di CustomerDto e Customer
    CustomerMapper INSTANCE = Mappers.getMapper(CustomerMapper.class);

    @Mapping(source = "name", target = "name")
    CustomerDto customerToDto(Customer customer);

    Customer dtoToCustomer(CustomerDto dto);
}
