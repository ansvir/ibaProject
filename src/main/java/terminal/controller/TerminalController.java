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
@RequestMapping("/subsystems")
public class TerminalController {


    @Autowired
    private SubsystemDAOImpl subsystemDAOImpl;

    @Autowired
    private CommandDAOImpl commandDAOImpl;

    //subsystems
    
    @GetMapping
    public List<Subsystem> getSubsystems() {
        return subsystemDAOImpl.getAllSubsystems();
    }

    @GetMapping(params = "id")
    public Subsystem getSubsystemById(@RequestParam("id") Integer id) {
        return subsystemDAOImpl.getById(id);
    }

    //commands

    @GetMapping(value = "/results", params = "name")
    public List<Command> getResultsBySubsystem(@RequestParam("name") String name) {
        return commandDAOImpl.getAllBySubsystemName(name);
    }

    @GetMapping(value = "/results", params = "id")
    public List<Command> getResultsBySubsystem(@RequestParam("id") Integer id) {
        return commandDAOImpl.getAllBySubsystemId(id);
    }

    @PostMapping("results/create")
    public ResponseEntity<?> createCommand(@RequestBody Command command) {
        commandDAOImpl.createCommand(command);
        return new ResponseEntity<Command>(command, HttpStatus.OK);
    }

    @DeleteMapping(value="/results/delete", params="id")
    public void deleteCommandsBySubsystemId(@RequestParam("id") Integer id) {
        commandDAOImpl.deleteCommandsBySubsystemId(id);
    }

}
