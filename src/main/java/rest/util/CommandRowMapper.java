package rest.util;
import rest.model.Command;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CommandRowMapper implements RowMapper{

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
