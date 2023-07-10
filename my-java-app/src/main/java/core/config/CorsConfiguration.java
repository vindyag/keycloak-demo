//package core.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//
//@Configuration
//public class CorsConfiguration implements WebMvcConfigurer {
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        System.out.println("Inside addCorsMappings,.....");
//        registry.addMapping("/core/v1/**")
//                .allowedOrigins("http://localhost:8081") // Replace with your frontend origin
//                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//                .allowedHeaders("Content-Type", "Authorization")
//                .exposedHeaders("Authorization") // Expose the Authorization header to the frontend
//                .allowCredentials(true); // Allow credentials (e.g., cookies) to be sent from frontend
//    }
//}
//
