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
     * Returns list of subsystem from database.
     *
     * @return list of subsystem
     */
    public List<Subsystem> list() {
        return subsystem;
    }

    /**
     * Return subsystem object for given id from database. If subsystem is
     * not found for id, returns null.
     *
     * @param id
     *            subsystem id
     * @return subsystem object for given id
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
     * Create new subsystem in database. Updates the id and insert new
     * subsystem in list.
     *
     * @param customer
     *            Subsystem object
     * @return subsystem object with updated id
     */
    public Subsystem create(Subsystem customer) {
        customer.setId(System.currentTimeMillis());
        subsystem.add(customer);
        return customer;
    }

    /**
     * Delete the subsystem object from database. If subsystem not found for
     * given id, returns null.
     *
     * @param id
     *            the subsystem id
     * @return id of deleted subsystem object
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
     * Update the subsystem object for given id in database. If subsystem
     * not exists, returns null
     *
     * @param id
     * @param newSubsystem
     * @return subsystem object with id
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
