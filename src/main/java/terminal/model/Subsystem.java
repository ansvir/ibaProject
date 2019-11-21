package terminal.model;

public class Subsystem {

    private int id;
    private String name;

    public Subsystem(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id=id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name=name;
    }

    @Override
    public String toString() {
        return this.id+" "+this.name;
    }

    @Override
    public boolean equals(Object o) {
        if(o == this) return true;

        if(!(o instanceof Subsystem)) return false;

        Subsystem subsystem = (Subsystem) o;

        return this.id==subsystem.id &&
                this.name.equals(subsystem.name);
    }

    @Override
    public int hashCode() {
        int result=17;
        result=result*31+this.id;
        result=result*31+this.name.hashCode();
        return result;
    }
}
