package core.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@CrossOrigin
@RequestMapping(value="/v1/", produces = {APPLICATION_JSON_VALUE})
@RestController
public class NoteController {

    @GetMapping("/notes")
    public ResponseEntity getNotes() {
        List<String> notes = new ArrayList<>();
        notes.add("Note 1");
        notes.add("Note 2");
        notes.add("Note 3");
        return ResponseEntity.ok().body(notes);
    }

}
