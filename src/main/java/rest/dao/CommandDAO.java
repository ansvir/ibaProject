package rest.dao;
import rest.model.Command;

import javax.sql.DataSource;
import java.util.List;

public interface CommandDAO{

//    public void setDataSource(DataSource dataSource);

    public List<Command> listCommands();

    public Command getById(Integer id);

    public String getResultByName(String command);

    public Command createCommand(Command command);

    public Integer deleteCommand(Integer id);

    public Command updateCommand(Integer id, Command newCommand);
}