package rest.dao;
import rest.model.Subsystem;
import java.util.List;

public interface SubsystemDAO{

    public List<Subsystem> listSubsystems();

    public Subsystem getById(Integer id);

    public List<Subsystem> getByName(String name);

    public Subsystem createSubsystem(Subsystem subsystem);

    public Integer deleteSubsystem(Integer id);

    public Subsystem updateSubsystem(Integer id, Subsystem newSubsystem);
}
