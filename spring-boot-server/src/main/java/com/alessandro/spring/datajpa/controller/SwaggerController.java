package com.alessandro.spring.datajpa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SwaggerController {

	@GetMapping("/swagger-ui")
	public ModelAndView swaggerUi() {
	    return new ModelAndView("redirect:/swagger-ui/index.html");
	}

}
