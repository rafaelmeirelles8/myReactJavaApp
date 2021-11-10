package com.myjavaproject.webservices.myJavaProject.auth.basic;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@AllArgsConstructor
public class BasicAuthController {


    @GetMapping(path="/basicauth")
    public AuthenticationBean login() {
        return new AuthenticationBean("You are authenticated!");
    }

}
