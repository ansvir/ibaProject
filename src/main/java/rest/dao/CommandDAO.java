package rest.dao;
import rest.model.Command;

import javax.sql.DataSource;
import java.util.List;

public interface CommandDAO{

    public List<Command> listCommands();

    public Command getById(Integer id);

    public List<Command> getResultsBySubsystem(Integer id);

    public Command createCommand(Command command);

    public void deleteCommandsBySubsystem(Integer subsystem_id);

    public Integer deleteCommand(Integer id);

    public Command updateCommand(Integer id, Command newCommand);
}