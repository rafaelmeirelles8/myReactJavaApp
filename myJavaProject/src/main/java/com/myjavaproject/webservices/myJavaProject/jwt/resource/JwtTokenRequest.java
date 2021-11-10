package com.myjavaproject.webservices.myJavaProject.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

    /*
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYWZhZWwiLCJleHAiOjE2MzcxNjQ1ODAsImlhdCI6MTYzNjU1OTc4MH0.qKeaHySNQ_gU4Kb5e-4F8iKjVVy8NI9PnXtvXNxmdJscGahdOyjgwm9xX8TiA45ta-Eo3Wc2XnPdmjoufnt7fA"
     */

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
