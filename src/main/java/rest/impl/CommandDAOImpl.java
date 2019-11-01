package rest.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.ColumnMapRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
import rest.dao.CommandDAO;
import rest.model.Command;
import rest.util.CommandRowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
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

    public List<Command> getResultsBySubsystem(Integer id) {
        String query="SELECT * FROM commands WHERE subsystem_id = ?";
        return jdbcTemplate.query(query,new Object[]{id},new CommandRowMapper());
//                new RowMapper<Command>() {
//            public Command mapRow(ResultSet rs, int rowNum) throws SQLException {
//                Command command = new Command();
//                command.setCommand(rs.getString("command"));
//                command.setResult(rs.getString("result"));
//                return command;
//            }
//        });
    }

    public Command createCommand(Command newCommand) {

        String query="INSERT INTO commands (subsystem_id,command,result,timestamp) VALUES (?,?,?,?)";
        jdbcTemplate.update(query,newCommand.getSubsystem_id(),newCommand.getCommand(),newCommand.getResult(),newCommand.getTimestamp());
        commands.add(newCommand);
        return newCommand;
    }

    public void deleteCommandsBySubsystem(Integer subsystem_id) {
        String query="DELETE FROM commands WHERE subsystem_id = ?";
        jdbcTemplate.update(query,subsystem_id);
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
