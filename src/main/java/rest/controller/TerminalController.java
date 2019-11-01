package rest.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rest.impl.CommandDAOImpl;
import rest.impl.SubsystemDAOImpl;
import rest.model.Command;
import rest.model.Subsystem;

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
        return subsystemDAOImpl.listSubsystems();
    }

    @GetMapping("/subsystems/{id}")
    public ResponseEntity<?> getSubsystem(@PathVariable("id") int id) {

        Subsystem subsystem= subsystemDAOImpl.getById(id);
        if (subsystem==null) {
            return new ResponseEntity<String>("No subsystem found for id " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Subsystem>(subsystem, HttpStatus.OK);
    }

//    @GetMapping("/subsystems/{name}")
//    public ResponseEntity<?> getSubsystem(@PathVariable("name") String name) {
//
//        List<Subsystem> subsystems= subsystemDAOImpl.getByName(name);
//        if (subsystems.isEmpty()) {
//            return new ResponseEntity<String>("No subsystem found for name " + name, HttpStatus.NOT_FOUND);
//        }
//
//        return new ResponseEntity<List<Subsystem>>(subsystems, HttpStatus.OK);
//    }

    @PostMapping(value = "/subsystems")
    public ResponseEntity<?> createSubsystem(@RequestBody Subsystem subsystem) {

        subsystemDAOImpl.createSubsystem(subsystem);

        return new ResponseEntity<Subsystem>(subsystem, HttpStatus.OK);
    }

    @DeleteMapping("/subsystems/{id}")
    public ResponseEntity<?> deleteSubsystem(@PathVariable Integer id) {

        if (null == subsystemDAOImpl.deleteSubsystem(id)) {
            return new ResponseEntity<String>("No Subsystems found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Integer>(id, HttpStatus.OK);

    }

    @PutMapping("/subsystems/{id}")
    public ResponseEntity<?> updateSubsystem(@PathVariable Integer id, @RequestBody Subsystem subsystem) {

        subsystem = subsystemDAOImpl.updateSubsystem(id, subsystem);

        if (null == subsystem) {
            return new ResponseEntity<String>("No Subsystem found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Subsystem>(subsystem, HttpStatus.OK);
    }

    //commands

    @GetMapping("/subsystems/{name}/result")
    public List<Command> getResultsBySubsystem(@PathVariable("name") String name) {
        List<Command> lc=new ArrayList<>();
        lc=commandDAOImpl.getResultsBySubsystem(subsystemDAOImpl.getIdByName(name));
        return lc;
    }

    @PostMapping
    public ResponseEntity<?> createCommand(@RequestBody Command command) {
        commandDAOImpl.createCommand(command);
        return new ResponseEntity<Command>(command, HttpStatus.OK);
    }

}
