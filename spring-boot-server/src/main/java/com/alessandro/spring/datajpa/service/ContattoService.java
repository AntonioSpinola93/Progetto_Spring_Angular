package com.alessandro.spring.datajpa.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alessandro.spring.datajpa.dto.ContattoDTO;
import com.alessandro.spring.datajpa.model.Contatto;
import com.alessandro.spring.datajpa.projection.ContattoProjection;
import com.alessandro.spring.datajpa.repository.ContattoRepository;
import java.util.ArrayList;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContattoService {
//ContattoService 
    private final ContattoRepository contattoRepository;

    @Autowired
    public ContattoService(ContattoRepository contattoRepository) {
        this.contattoRepository = contattoRepository;
    }

    public List<ContattoDTO> getContatti() {
        List<Contatto> contatti = contattoRepository.findAll();
        return contatti.stream()
                .map(this::mapToContattoDTO)
                .collect(Collectors.toList());
    }

    public boolean verificaNumeroContatti() {
        List<Contatto> contatti = contattoRepository.findAll();
        return contatti.size() <= 5;
    }
    //Metodo mapToContattoDTO
    private ContattoDTO mapToContattoDTO(Contatto contatto) {
        ContattoDTO contattoDTO = new ContattoDTO();
        contattoDTO.setId(contatto.getId());
        contattoDTO.setNome(contatto.getNome());
        contattoDTO.setEmail(contatto.getEmail());
        // Mappa gli altri campi della DTO
        return contattoDTO;
    }
    
    public boolean elaboraContatto(ContattoDTO contattoDTO) {
        // Elaborazione del contatto
        // Esempio: Verifica se ci sono 5 o meno contatti
        
        List<Contatto> contatti = contattoDTO.getContatti();
        return contatti.size() <= 5;
    }
    
    public List<ContattoProjection> getAllContatti() {
        return contattoRepository.findAllBy();
    }

    public List<String> getContattoNames() {
        List<ContattoProjection> contatti = contattoRepository.findAllBy();
        List<String> names = new ArrayList<String>();


        for (ContattoProjection contatto : contatti) {
            names.add(contatto.getNome());
        }
        return names;
    }
  //Uso di una Projection
    public List<ContattoProjection> getContattiWithNumeroContattiInseriti() {
        return contattoRepository.findAllWithNumeroContattiInseriti();
    }
    
  
}
