package terminal.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import terminal.dao.CommandDAO;
import terminal.model.Command;
import terminal.util.CommandRowMapper;
import java.util.List;

@Component
public class CommandDAOImpl implements CommandDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Command> getAllBySubsystemId(Integer id) {
        String query="SELECT * FROM commands WHERE subsystem_id = ?";
        return jdbcTemplate.query(query,new Object[]{id},new CommandRowMapper());
    }

    public List<Command> getAllBySubsystemName(String name) {
        String query=
                "SELECT * FROM commands\n"+
                "JOIN subsystems ON commands.subsystem_id=subsystems.id\n" +
                "WHERE subsystems.name LIKE ?;";
        return jdbcTemplate.query(query,new Object[]{name},new CommandRowMapper());
    }

    public void createCommand(Command newCommand) {
        String query="INSERT INTO commands (subsystem_id,command,result,timestamp) VALUES (?,?,?,?)";
        jdbcTemplate.update(query,newCommand.getSubsystem_id(),newCommand.getCommand(),newCommand.getResult(),newCommand.getTimestamp());
    }

    public void deleteCommandsBySubsystemId(Integer subsystem_id) {
        String query="DELETE FROM commands WHERE subsystem_id = ?";
        jdbcTemplate.update(query,subsystem_id);
    }
}
