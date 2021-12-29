package com.myjavaproject.webservices.myJavaProject.Car;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/cars/jpa")
@CrossOrigin("*")
@AllArgsConstructor
public class CarJpaController {

    @Autowired
    private CarJpaService carJpaService;

    @GetMapping("/cars")
    public ResponseEntity<List<Car>> getAllCars() {

        List<Car> allCars = carJpaService.getAllCars();
        return new ResponseEntity<>(allCars, HttpStatus.OK);
    }

    @GetMapping("/cars/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {

        Car car = carJpaService.getCarById(id);

        if(car == null) {
            return new ResponseEntity("Car not found!", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @DeleteMapping("/cars/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long id) {

        Car car = carJpaService.deleteCarById(id);

        if(car == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/cars/")
    public ResponseEntity<Void> createCar(@RequestBody Car car) {
        Car newCar = carJpaService.saveCar(car);
        if(newCar != null) {
            return ResponseEntity.noContent().build();
        }

        return new ResponseEntity("Car not created", HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/cars/")
    public ResponseEntity<Void> updateCar(@RequestBody Car car) {
        Car updatedCar = carJpaService.updateCar(car);
        if(updatedCar != null) {
            return ResponseEntity.noContent().build();
        }

        return new ResponseEntity("Car not updated", HttpStatus.BAD_REQUEST);
    }

}
