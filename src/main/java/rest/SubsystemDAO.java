package rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class SubsystemDAO {

    private static List<Subsystem> subsystem;
    {
        subsystem = new ArrayList<Subsystem>();
        subsystem.add(new Subsystem(1, "IMS", "IMS"));
        subsystem.add(new Subsystem(2, "CICS", "CICS"));
        subsystem.add(new Subsystem(3, "MQ", "MQ"));
        subsystem.add(new Subsystem(4, "DB2", "DB2"));
        subsystem.add(new Subsystem(5, "FTP", "FTP"));
    }

    /**
     * Returns list of subsystem from dummy database.
     *
     * @return list of subsystem
     */
    public List<Subsystem> list() {
        return subsystem;
    }

    /**
     * Return customer object for given id from dummy database. If customer is
     * not found for id, returns null.
     *
     * @param id
     *            customer id
     * @return customer object for given id
     */
    public Subsystem get(Long id) {

        for (Subsystem c : subsystem) {
            if (c.getId().equals(id)) {
                return c;
            }
        }
        return null;
    }

    /**
     * Create new customer in dummy database. Updates the id and insert new
     * customer in list.
     *
     * @param customer
     *            Subsystem object
     * @return customer object with updated id
     */
    public Subsystem create(Subsystem customer) {
        customer.setId(System.currentTimeMillis());
        subsystem.add(customer);
        return customer;
    }

    /**
     * Delete the customer object from dummy database. If customer not found for
     * given id, returns null.
     *
     * @param id
     *            the customer id
     * @return id of deleted customer object
     */
    public Long delete(Long id) {

        for (Subsystem c : subsystem) {
            if (c.getId().equals(id)) {
                subsystem.remove(c);
                return id;
            }
        }

        return null;
    }

    /**
     * Update the customer object for given id in dummy database. If customer
     * not exists, returns null
     *
     * @param id
     * @param newSubsystem
     * @return customer object with id
     */
    public Subsystem update(Long id, Subsystem newSubsystem) {

        for (Subsystem c : subsystem) {
            if (c.getId().equals(id)) {
                newSubsystem.setId(c.getId());
                subsystem.remove(c);
                subsystem.add(newSubsystem);
                return newSubsystem;
            }
        }

        return null;
    }

}
