package rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class CustomerDAO {

    private int counter;
    // Dummy database. Initialize with some dummy values.
    private static List<Subsystem> terminal;
    {
        terminal = new ArrayList<Subsystem>();
        terminal.add(new Subsystem(1, "IMS", "IMS"));
    }

    /**
     * Returns list of terminal from dummy database.
     *
     * @return list of terminal
     */
    public List<Subsystem> list() {
        return terminal;
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

        for (Subsystem c : terminal) {
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
        terminal.add(customer);
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

        for (Subsystem c : terminal) {
            if (c.getId().equals(id)) {
                terminal.remove(c);
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
     * @param customer
     * @return customer object with id
     */
    public Subsystem update(Long id, Subsystem customer) {

        for (Subsystem c : terminal) {
            if (c.getId().equals(id)) {
                customer.setId(c.getId());
                terminal.remove(c);
                terminal.add(customer);
                return customer;
            }
        }

        return null;
    }

}
