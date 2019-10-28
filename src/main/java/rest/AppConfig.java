package rest;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "rest")
public class AppConfig {
    @Bean
    public CommandDAO commandDAO() {
        return new CommandDAO();
    }
}


