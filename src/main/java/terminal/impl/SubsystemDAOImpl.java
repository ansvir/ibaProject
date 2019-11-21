package terminal.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import terminal.model.Command;
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
        Subsystem s=new Subsystem(1,"subName");
        Subsystem s2=new Subsystem(2,"subName2");
        Subsystem s4=new Subsystem(1,"subName");
        Command c=new Command(2,1,"command","result","timestamp");
        Command c2=new Command(4,1,"command2","result2","timestamp2");
        Command c4=new Command(2,1,"command","result","timestamp");
        System.out.println(s.toString());
        System.out.println(c.toString());
        System.out.println(s.equals(s2)+" "+s.equals(s4));
        System.out.println(c.equals(c2)+" "+c.equals(c4));
        System.out.println(s.hashCode());
        System.out.println(c.hashCode());

        String query="SELECT * FROM subsystems;";
        return jdbcTemplate.query(query,new SubsystemRowMapper());
    }

}
