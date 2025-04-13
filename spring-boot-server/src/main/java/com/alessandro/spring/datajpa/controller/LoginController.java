package com.alessandro.spring.datajpa.controller;
import com.alessandro.spring.datajpa.model.Utente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") // Replace with your Angular app URL
public class LoginController {


    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody Utente user) {

        return null;
    }
}
