package rest.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import rest.impl.CommandDAOImpl;
import rest.impl.SubsystemDAOImpl;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "rest")
public class AppConfig {
    @Bean
    public CommandDAOImpl commandDAO() {
        return new CommandDAOImpl();
    }
}


