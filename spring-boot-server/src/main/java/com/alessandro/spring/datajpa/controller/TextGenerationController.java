package com.alessandro.spring.datajpa.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TextGenerationController {

    @Value("${chatgpt.api.key}")
    private String apiKey;

    @PostMapping(value = "/generate-text", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody String generateText(@RequestBody String inputText) {
        try {
            // La tua logica per generare il testo qui

            String generatedText = "Il testo generato";
            return "{\"generatedText\": \"" + generatedText + "\"}";
        } catch (Exception e) {
            e.printStackTrace();
            return "{\"error\": \"Error occurred during text generation.\"}";
        }
    }
}
