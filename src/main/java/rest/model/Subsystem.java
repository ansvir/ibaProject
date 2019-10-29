package rest.model;

public class Subsystem {

    private int id;
    private String name;
    private String url;

    public Subsystem(int id, String name, String url) {
        this.id = id;
        this.name = name;
        this.url = url;
    }

    Subsystem() {}

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

    public String getUrl() {
        return url;
    }

    public void setId(String url) {
        this.url=url;
    }
}
