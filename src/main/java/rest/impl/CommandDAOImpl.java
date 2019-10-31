package rest.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import rest.dao.CommandDAO;
import rest.model.Command;
import java.util.ArrayList;
import java.util.List;

@Component
public class CommandDAOImpl implements CommandDAO {

    private static List<Command> commands;
    {
        commands=new ArrayList<>();
    }

    @Autowired
    private JdbcTemplate jdbcTemplate;

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

    public String getResultByName(String command) {

        for(Command c: commands) {
            if(c.getCommand().equals(command)) return c.getResult();
        }
        return "Command not found";
    }

    public Command createCommand(Command newCommand) {

        String query="INSERT INTO commands (subsystem_id,command,result,timestamp) VALUES (?,?,?,?)";
        jdbcTemplate.update(query,newCommand.getSubsystem_id(),newCommand.getCommand(),newCommand.getResult(),newCommand.getTimestamp());
        commands.add(newCommand);
        System.out.println("Command added:\n"+newCommand.getSubsystem_id()+"\n"+newCommand.getCommand()+"\n"+newCommand.getTimestamp()+"\n");
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
