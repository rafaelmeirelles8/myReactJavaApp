package com.myjavaproject.webservices.myJavaProject.Car;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.myjavaproject.webservices.myJavaProject.User.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(NON_NULL)
public class Car {

    @Id
    @GeneratedValue
    private Long id;

    @Column(
            nullable = false,
            unique = true
    )
    private String name;

    @Column(
            nullable = false
    )
    private String model;

    @Column(
            nullable = false,
            columnDefinition = "INT"
    )
    private int year;

    @ManyToMany(mappedBy = "carList")
    private List<User> owners = new ArrayList<>();

}
