package rest;

public class Greeting {

    private final String name;
    private final String url;

    public Greeting(String name, String url) {
        this.name = name;
        this.url = url;

    }

    public String getName() {
        return this.name;
    }

    public String getUrl() {
        return this.url;
    }

}
