package com.myjavaproject.webservices.myJavaProject.Car;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/cars/jpa")
@CrossOrigin("*")
@AllArgsConstructor
public class CarJpaController {
}
