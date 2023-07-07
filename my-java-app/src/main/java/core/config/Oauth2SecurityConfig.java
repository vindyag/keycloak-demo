/*
package core.config;

import org.springframework.boot.actuate.autoconfigure.security.servlet.EndpointRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
@EnableMethodSecurity
public class Oauth2SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .csrf()
                .disable()
                .cors() // Enable CORS support
                .and()
                .authorizeHttpRequests()
                .requestMatchers(EndpointRequest.to("health", "info"))
                .permitAll()
                .requestMatchers("/**")
                .fullyAuthenticated();
        return http.build();
    }

}

*/
