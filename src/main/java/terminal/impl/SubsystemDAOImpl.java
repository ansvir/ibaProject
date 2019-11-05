package terminal.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import terminal.model.Subsystem;
import terminal.dao.SubsystemDAO;
import terminal.util.SubsystemRowMapper;

@Component
public class SubsystemDAOImpl implements SubsystemDAO{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public Subsystem getById(Integer id) {
        String query="SELECT * FROM subsystems WHERE id = ?";
        return jdbcTemplate.queryForObject(query,new SubsystemRowMapper(),id);
    }
    public List<Subsystem> getAllSubsystems() {
        String query="SELECT * FROM subsystems;";
        return jdbcTemplate.query(query,new SubsystemRowMapper());
    }

    public Integer getIdByName(String name) {
        List<Subsystem> subsystems=getAllSubsystems();
        for(Subsystem s: subsystems) {
            if(s.getName().equals(name)) {
                return s.getId();
            }
        }

        return null;
    }

}
