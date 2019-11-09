package terminal.dao;
import terminal.model.Command;

import java.util.List;

public interface CommandDAO{

    List<Command> getAllBySubsystemName(String name);

    Command createCommand(Command command);

    void deleteCommandsBySubsystemId(Integer subsystem_id);
}