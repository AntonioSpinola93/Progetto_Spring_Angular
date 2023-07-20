package com.alessandro.spring.datajpa.config;

import org.keycloak.adapters.springboot.KeycloakSpringBootProperties;
import org.keycloak.enums.TokenStore;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TokenStoreConfig {

    @Bean
    public TokenStore tokenStore(KeycloakSpringBootProperties properties) {
        return new RemoteTokenStore(properties.getTokenStore());
    }

    @Bean
    public RemoteTokenStore.AccessTokenConverter accessTokenConverter(KeycloakSpringBootProperties properties) {
        return new RemoteTokenStore.AccessTokenConverter(properties.getTokenStore().getJwt());
    }
}
