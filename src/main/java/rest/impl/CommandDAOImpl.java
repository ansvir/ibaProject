package rest.impl;

import org.springframework.jdbc.core.JdbcTemplate;
import rest.dao.CommandDAO;
import rest.model.Command;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

public class CommandDAOImpl implements CommandDAO {

    private static List<Command> commands;
    {
        commands=new ArrayList<>();
    }

    private DataSource dataSource;
    private JdbcTemplate jdbcTemplate;

    @Override
    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        this.jdbcTemplate=new JdbcTemplate(dataSource);
    }

    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate=jdbcTemplate;
    }

    public JdbcTemplate getJdbcTemplate() {
        return this.jdbcTemplate;
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
        System.out.println("Command added:\n"+newCommand.getId()+"\n"+newCommand.getCommand()+"\n");
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
