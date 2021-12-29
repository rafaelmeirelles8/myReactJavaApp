package com.myjavaproject.webservices.myJavaProject.User;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/users/jpa")
@CrossOrigin("*")
@AllArgsConstructor
public class UserJpaController {

    @Autowired
    private UserService userService;


    @GetMapping(path = "/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "/users/{id}")
    public User getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @DeleteMapping(path = "/users/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable long id) {
        User user = userService.deleteUserById(id);
        if(user != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping(path = "/users")
    public ResponseEntity<Void> createUser(@RequestBody User user) {
        User newUser = userService.saveUser(user);
        if(newUser == null) {
            return ResponseEntity.noContent().build();
        }

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newUser.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping(path = "/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id,
                                           @RequestBody User user) {
        User updatedUser = userService.saveUser(user);

        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

}
