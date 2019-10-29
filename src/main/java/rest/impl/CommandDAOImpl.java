package rest.impl;

import rest.dao.CommandDAO;
import rest.model.Command;

import java.util.ArrayList;
import java.util.List;

public class CommandDAOImpl implements CommandDAO {

    private static List<Command> commands;
    {
        commands=new ArrayList<>();
    }

    public List<Command> listCommands() {
        return commands;
    }

    public Command getById(Integer id) {

        for (Command c : commands) {
            if (c.getId()==id) {
                return c;
            }
        }
        return null;
    }

    public List<Command> getByCommand(String command) {

        List<Command> commandsByCommand=new ArrayList<Command>();
        for (Command c : commands) {
            if (c.getCommand().equals(command)) {
                commandsByCommand.add(c);
            }
        }

        return commandsByCommand.isEmpty()?null:commandsByCommand;
    }

    public Command createCommand(Command newCommand) {
        commands.add(newCommand);
        return newCommand;
    }

    public Integer deleteCommand(Integer id) {

        for (Command c : commands) {
            if (c.getId()==id) {
                commands.remove(c);
                return id;
            }
        }

        return null;
    }

    public Command updateCommand(Integer id, Command newCommand) {

        for (Command c : commands) {
            if (c.getId()==id) {
                newCommand.setId(c.getId());
                commands.remove(c);
                commands.add(newCommand);
                return newCommand;
            }
        }

        return null;
    }
}
