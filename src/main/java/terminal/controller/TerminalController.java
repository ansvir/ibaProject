package terminal.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import terminal.impl.CommandDAOImpl;
import terminal.impl.SubsystemDAOImpl;
import terminal.model.Command;
import terminal.model.Subsystem;

@CrossOrigin(origins = "*")
@RestController
public class TerminalController {


    @Autowired
    private SubsystemDAOImpl subsystemDAOImpl;

    @Autowired
    private CommandDAOImpl commandDAOImpl;

    //subsystems
    @GetMapping("/subsystems")
    public List<Subsystem> getSubsystems() {
        return subsystemDAOImpl.getAllSubsystems();
    }

    @GetMapping("/subsystems/{id}")
    public ResponseEntity<?> getSubsystem(@PathVariable("id") int id) {

        Subsystem subsystem= subsystemDAOImpl.getById(id);
        if (subsystem==null) {
            return new ResponseEntity<String>("No subsystem found for id " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Subsystem>(subsystem, HttpStatus.OK);
    }

    //commands

    @GetMapping("/subsystems/{name}/result")
    public List<Command> getResultsBySubsystem(@PathVariable("name") String name) {
        return commandDAOImpl.getAllBySubsystemName(name);
    }

    @PostMapping
    public ResponseEntity<?> createCommand(@RequestBody Command command) {
        commandDAOImpl.createCommand(command);
        return new ResponseEntity<Command>(command, HttpStatus.OK);
    }

}
