package com.myjavaproject.webservices.myJavaProject.User;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.myjavaproject.webservices.myJavaProject.Todo.Todo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("user")
    private List<Todo> todoList = new ArrayList<>();

}
