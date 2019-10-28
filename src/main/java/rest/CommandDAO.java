package rest;

import java.util.ArrayList;
import java.util.List;

public class CommandDAO {

    private static List<Command> command;
    {
        command=new ArrayList<>();
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
    public Command get(int id) {

        for (Command c : command) {
            if (c.getId()==id) {
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
        command.add(newCommand);
        System.out.println("new command entered: \n"+newCommand.getId()+"\n"+newCommand.getCommand()+"\n"+newCommand.getTimestamp()+"\n");
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
    public Integer delete(int id) {

        for (Command c : command) {
            if (c.getId()==id) {
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
    public Command update(int id, Command newCommand) {

        for (Command c : command) {
            if (c.getId()==id) {
                newCommand.setId(c.getId());
                command.remove(c);
                command.add(newCommand);
                return newCommand;
            }
        }

        return null;
    }
}
