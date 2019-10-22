package rest;

public class Subsystem {

    private Long id;
    private String name;
    private String url;

    public Subsystem(long id, String name, String url) {
        this.id = id;
        this.name = name;
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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
