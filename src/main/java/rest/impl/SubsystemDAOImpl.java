package rest.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import rest.model.Subsystem;
import rest.dao.SubsystemDAO;

@Component
public class SubsystemDAOImpl implements SubsystemDAO{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static List<Subsystem> subsystem;
    {
        subsystem = new ArrayList<Subsystem>();
        subsystem.add(new Subsystem(1, "IMS"));
        subsystem.add(new Subsystem(2, "CICS"));
        subsystem.add(new Subsystem(3, "MQ"));
        subsystem.add(new Subsystem(4, "DB2"));
        subsystem.add(new Subsystem(5, "FTP"));
    }

    public List<Subsystem> listSubsystems() {
        return subsystem;
    }

    public Subsystem getById(Integer id) {

        for (Subsystem s : subsystem) {
            if (s.getId()==id) {
                return s;
            }
        }
        return null;
    }

    public List<Subsystem> getByName(String name) {

        List<Subsystem> subsystemsByName=new ArrayList<Subsystem>();
        for (Subsystem s : subsystem) {
            if (s.getName().equals(name)) {
                subsystemsByName.add(s);
            }
        }

        return subsystemsByName.isEmpty()?null:subsystemsByName;
    }

    public Integer getIdByName(String name) {
        for(Subsystem s: subsystem) {
            if(s.getName().equals(name))
                System.out.println(name+" "+s.getId());
                return s.getId();
        }
        return null;
    }

    public Subsystem createSubsystem(Subsystem newSubsystem) {
        subsystem.add(newSubsystem);
        return newSubsystem;
    }

    public Integer deleteSubsystem(Integer id) {

        for (Subsystem c : subsystem) {
            if (c.getId()==id) {
                subsystem.remove(c);
                return id;
            }
        }

        return null;
    }

    public Subsystem updateSubsystem(Integer id, Subsystem newSubsystem) {

        for (Subsystem c : subsystem) {
            if (c.getId()==id) {
                newSubsystem.setId(c.getId());
                subsystem.remove(c);
                subsystem.add(newSubsystem);
                return newSubsystem;
            }
        }

        return null;
    }

}
