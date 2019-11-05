package terminal.util;

import org.springframework.jdbc.core.RowMapper;
import terminal.model.Subsystem;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SubsystemRowMapper implements RowMapper<Subsystem> {

    @Override
    public Subsystem mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Subsystem(
                rs.getInt("id"),
                rs.getString("name")
        );
    }
}