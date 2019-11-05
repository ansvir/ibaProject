package terminal.util;
import terminal.model.Command;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CommandRowMapper implements RowMapper<Command>{

    @Override
    public Command mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Command(
                rs.getInt("id"),
                rs.getInt("subsystem_id"),
                rs.getString("command"),
                rs.getString("result"),
                rs.getString("timestamp")
        );
    }
}
