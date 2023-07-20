package com.alessandro.spring.datajpa.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TempController {

    @GetMapping("/temp")
    public String tempEndpoint() {
        return "Questa è una risorsa temporanea.";
    }
}
