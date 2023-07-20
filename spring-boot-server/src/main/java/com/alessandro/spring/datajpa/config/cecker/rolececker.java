package com.alessandro.spring.datajpa.config.cecker;

/*
import lombok.extern.slf4j.Slf4j;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.keycloak.representations.AccessToken;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;


import java.util.Set;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@Service
public class RoleChecker implements InitializingBean {

    private final RoleService roleService;
    //Utilizzato per creare un interfaccia della classe 
    
    public RoleChecker(RoleService roleService) {
        this.roleService = roleService;
    }

    @Override
    public void afterPropertiesSet() throws Exception {

    }
    // Alessandro implementazione della logica per acquisire il ruolo tramite username stringa da 
    //risorsa esterna 
    public boolean check(Authentication authentication, HttpServletRequest request) {
        KeycloakPrincipal principal = (KeycloakPrincipal)authentication.getPrincipal();
        KeycloakSecurityContext session = principal.getKeycloakSecurityContext();
        AccessToken accessToken = session.getToken();

        log.debug("accessToken: {}", accessToken.getPreferredUsername());
        log.debug("request: {} {}", request.getMethod(), request.getRequestURI());

        // qui bisogna innestare la logica che partendo dallo username interroga
        // qualche servizio per ottenere informazioni su ruolo
        // dopodiché incrocio il ruolo con il path e il metodo per capire se abilitato
        
        String username = accessToken.getPreferredUsername();
        Set<String> roles = roleService.getRolesByUsername(username);

        return true;
    }
}
*/