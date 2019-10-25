package rest;

import java.util.ArrayList;
import java.util.List;

public class CommandDAO {

    private static List<Command> command;
    {
    }

    /**
     * Returns list of command from database.
     *
     * @return list of command
     */
    public List<Command> list() {
        return command;
    }

    /**
     * Return customer object for given id from dummy database. If customer is
     * not found for id, returns null.
     *
     * @param id
     *            customer id
     * @return command object for given id
     */
    public Command get(Long id) {

        for (Command c : command) {
            if (c.getId().equals(id)) {
                return c;
            }
        }
        return null;
    }

    /**
     * Create new command in database.
     * @param newCommand
     *            Subsystem object
     * @return command object with updated id
     */
    public Command create(Command newCommand) {
        newCommand.setId(System.currentTimeMillis());
        command.add(newCommand);
        return newCommand;
    }

    /**
     * Delete the command object from database. If command not found for
     * given id, returns null.
     *
     * @param id
     *            the customer id
     * @return id of deleted command object
     */
    public Long delete(Long id) {

        for (Command c : command) {
            if (c.getId().equals(id)) {
                command.remove(c);
                return id;
            }
        }

        return null;
    }

    /**
     * Update the command object for given id in dummy database. If command
     * not exists, returns null
     *
     * @param id
     * @param newCommand
     * @return command object with id
     */
    public Command update(Long id, Command newCommand) {

        for (Command c : command) {
            if (c.getId().equals(id)) {
                newCommand.setId(c.getId());
                command.remove(c);
                command.add(newCommand);
                return newCommand;
            }
        }

        return null;
    }
}
