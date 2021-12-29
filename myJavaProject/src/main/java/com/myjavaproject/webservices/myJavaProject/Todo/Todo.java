package com.myjavaproject.webservices.myJavaProject.Todo;

import com.myjavaproject.webservices.myJavaProject.User.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    private String description;

    private Date targetDate;

    private boolean isDone;
}
