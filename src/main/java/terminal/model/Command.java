package terminal.model;

public class Command {
    private int id;
    private int subsystem_id;
    private String command;
    private String result;
    private String timestamp;

    public Command() {}

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

    @Override
    public String toString() {
        return this.id+" "+this.subsystem_id+" "+this.command+" "+this.result+" "+this.timestamp;
    }

    @Override
    public boolean equals(Object o) {
        if(o == this) return true;

        if(!(o instanceof Command)) return false;

        Command command = (Command) o;

        return this.id==command.id &&
                this.subsystem_id==command.subsystem_id &&
                this.command.equals(command.command) &&
                this.result.equals(command.result) &&
                this.timestamp.equals(command.timestamp);

    }

    @Override
    public int hashCode() {
        int result=17;
        result=result*31+this.id;
        result=result*31+this.subsystem_id;
        result=result*31+this.command.hashCode();
        result=result*31+this.result.hashCode();
        result=result*31+this.timestamp.hashCode();
        return result;
    }
}
