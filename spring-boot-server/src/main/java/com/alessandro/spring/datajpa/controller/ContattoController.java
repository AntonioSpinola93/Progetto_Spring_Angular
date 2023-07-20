package com.alessandro.spring.datajpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alessandro.spring.datajpa.model.Contatto;
import com.alessandro.spring.datajpa.repository.ContattoRepository;
import com.alessandro.spring.datajpa.service.FiltriContatti;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/contatti")
public class ContattoController {

  @Autowired
  private ContattoRepository contattoRepository;

  @PostMapping("/contacts")
  public ResponseEntity<Contatto> creaContatto(@RequestBody Contatto contatto) {
    try {
      Contatto nuovoContatto = contattoRepository.save(contatto);
      return new ResponseEntity<>(nuovoContatto, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @PostMapping("")
  public ResponseEntity<Contatto> crea(@RequestBody Contatto contatto) {
    try {
      Contatto nuovoContatto = contattoRepository.save(contatto);
      return new ResponseEntity<>(nuovoContatto, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @PostMapping("/contacts/search")
  public ResponseEntity<List<Contatto>> filtrareContatti(@RequestBody FiltriContatti filtriContatti) {
    try {
      List<Contatto> contattiFiltrati = contattoRepository.filtrareContatti(filtriContatti);
      return new ResponseEntity<>(contattiFiltrati, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @RequestMapping(value = "/contacts", method = RequestMethod.OPTIONS)
  public ResponseEntity<?> handleOptions() {
    return ResponseEntity.ok().build();
  }
  
  @GetMapping("/contacts")
  public ResponseEntity<List<Contatto>> getContatti() {
    try {
      List<Contatto> contatti = contattoRepository.findAll();
      return new ResponseEntity<>(contatti, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @DeleteMapping("/contacts/{id}")
  public ResponseEntity<HttpStatus> eliminaContatto(@PathVariable("id") long id) {
    try {
      contattoRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
