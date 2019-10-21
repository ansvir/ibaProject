package rest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {


    @RequestMapping("/subsystems")
    public Greeting greeting(){
        return new Greeting("IMS","/subsystems/IMS");
    }
}
