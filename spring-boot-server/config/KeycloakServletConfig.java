package com.alessandro.spring.datajpa.config;

import org.keycloak.adapters.KeycloakDeployment;
import org.keycloak.adapters.KeycloakDeploymentBuilder;
import org.springframework.context.annotation.Configuration;

@Configuration
public class KeycloakServletConfig extends KeycloakServletInitializer {

    @Override
    protected KeycloakDeployment getDeployment() {
        return KeycloakDeploymentBuilder.build(
                getClass().getResourceAsStream("/keycloak.json")
        );
    }
}
