package terminal.dao;
import terminal.model.Subsystem;

import java.util.List;

public interface SubsystemDAO{

    List<Subsystem> getAllSubsystems();

    Subsystem getById(Integer id);

    Integer getIdByName(String name);
}
