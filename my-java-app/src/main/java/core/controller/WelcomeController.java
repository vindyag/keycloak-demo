package core.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RequestMapping(value="/", produces = {APPLICATION_JSON_VALUE})
@RestController
public class WelcomeController {

    @GetMapping
    public ResponseEntity getProducts() {
        return ResponseEntity.ok().body("hello");
    }

}
