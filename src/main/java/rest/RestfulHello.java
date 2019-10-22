package rest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class RestfulHello {

    @RequestMapping(value = "subsystems/IMS")
    public ResponseEntity<String> sayHello() {
        final HttpHeaders httpHeaders= new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        return new ResponseEntity<String>("{\n\t\"id\": \"1\"\n\t\"name\": \"IMS\"\n\t\"url\": \"IMS\"\n}", httpHeaders, HttpStatus.OK);
    }
}