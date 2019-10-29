package rest.model;

public class Subsystem {

    private int id;
    private String name;

    public Subsystem(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Subsystem() {}

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

}
