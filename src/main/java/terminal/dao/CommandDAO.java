package terminal.dao;
import terminal.model.Command;

import java.util.List;

public interface CommandDAO{
    List<Command> getAllBySubsystemId(Integer id);

    List<Command> getAllBySubsystemName(String name);

    void createCommand(Command command);

    void deleteCommandsBySubsystemId(Integer subsystem_id);
}