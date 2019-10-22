package rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SubsystemRestController {


    @Autowired
    private SubsystemDAO subsystemDAO;


    @GetMapping("/subsystems")
    public List<Subsystem> getCustomers() {
        return subsystemDAO.list();
    }

    @GetMapping("/subsystems/{id}")
    public ResponseEntity<?> getCustomer(@PathVariable("id") Long id) {

        Subsystem customer = subsystemDAO.get(id);
        if (customer == null) {
            return new ResponseEntity<String>("No Subsystem found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Subsystem>(customer, HttpStatus.OK);
    }

    @PostMapping(value = "/subsystems")
    public ResponseEntity<?> createCustomer(@RequestBody Subsystem subsystem) {

        subsystemDAO.create(subsystem);

        return new ResponseEntity<Subsystem>(subsystem, HttpStatus.OK);
    }

    @DeleteMapping("/subsystems/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable Long id) {

        if (null == subsystemDAO.delete(id)) {
            return new ResponseEntity<String>("No Subsystems found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Long>(id, HttpStatus.OK);

    }

    @PutMapping("/subsystems/{id}")
    public ResponseEntity<?> updateCustomer(@PathVariable Long id, @RequestBody Subsystem subsystem) {

        subsystem = subsystemDAO.update(id, subsystem);

        if (null == subsystem) {
            return new ResponseEntity<String>("No Subsystem found for ID " + id, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Subsystem>(subsystem, HttpStatus.OK);
    }

}
