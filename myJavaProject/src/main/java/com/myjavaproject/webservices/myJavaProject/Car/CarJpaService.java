package com.myjavaproject.webservices.myJavaProject.Car;

import com.myjavaproject.webservices.myJavaProject.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarJpaService {

    @Autowired
    private CarJpaRepository carJpaRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Car> getAllCars() {
        return carJpaRepository.findAll();
    }

    public Car deleteCarById(Long id) {
        Optional<Car> car = carJpaRepository.findById(id);

        if(car.isPresent()) {

            carJpaRepository.delete(car.get());
            return car.get();
        }
        return null;
    }

    public Car getCarById(Long id) {
        Optional<Car> car = carJpaRepository.findById(id);

        if (car.isPresent()) {
            return car.get();
        }

        return null;
    }

    public Car saveCar(Car car) {
        Car existentCar = carJpaRepository.findByName(car.getName());
        if(existentCar != null) {
            throw new IllegalStateException("car: " + car.getName() + " already exists");
        }

        return carJpaRepository.save(car);
    }

    public Car updateCar(Car car) {
        Car existentCar = carJpaRepository.findByName(car.getName());
        if(existentCar != null && !existentCar.getId().equals(car.getId())) {
            throw new IllegalStateException("car: " + car.getName() + " already exists");
        }

        return carJpaRepository.save(car);
    }
}
