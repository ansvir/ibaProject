package rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CommandRestController {


    @Autowired
    private CommandDAO commandDAO;

    @GetMapping("/commands")
    public List<Command> getCommands() {
        return commandDAO.list();
    }

    @GetMapping("/commands/{id}")
    public ResponseEntity<?> getCustomer(@PathVariable("id") Integer id) {

        Command command = commandDAO.get(id);
        if (command == null) {
            return new ResponseEntity<String>("No command found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Command>(command, HttpStatus.OK);
    }

    @PostMapping(value = "/commands")
    public ResponseEntity<?> createCommand(@RequestBody Command command) {

        commandDAO.create(command);
        return new ResponseEntity<Command>(command, HttpStatus.OK);
    }

    @DeleteMapping("/commands/{id}")
    public ResponseEntity<?> deleteCommand(@PathVariable Integer id) {

        if (null == commandDAO.delete(id)) {
            return new ResponseEntity<String>("No command found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Integer>(id, HttpStatus.OK);

    }

    @PutMapping("/commands/{id}")
    public ResponseEntity<?> updateCommands(@PathVariable Integer id, @RequestBody Command command) {

        command = commandDAO.update(id, command);

        if (null == command) {
            return new ResponseEntity<String>("No command found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Command>(command, HttpStatus.OK);
    }

}

