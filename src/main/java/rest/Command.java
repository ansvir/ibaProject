package rest;

public class Command {
    private int id;
    private int subsystem_id;
    private String command;
    private String result;
    private String timestamp;

    public Command(int id, int subsystem_id, String command, String result, String timestamp) {
        this.id = id;
        this.subsystem_id = subsystem_id;
        this.command = command;
        this.result=result;
        this.timestamp=timestamp;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id=id;
    }

    public int getSubsystem_id() {
        return subsystem_id;
    }

    public void setSubsystem_id(int subsystem_id) {
        this.subsystem_id = subsystem_id;
    }

    public String getCommand() {
        return command;
    }

    public void setCommand(String command) {
        this.command = command;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}
