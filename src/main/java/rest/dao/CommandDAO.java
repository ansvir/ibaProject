package rest.dao;
import rest.model.Command;
import java.util.List;

public interface CommandDAO{

    public List<Command> listCommands();

    public Command getById(Integer id);

    public List<Command> getByCommand(String command);

    public Command createCommand(Command command);

    public Integer deleteCommand(Integer id);

    public Command updateCommand(Integer id, Command newCommand);
}