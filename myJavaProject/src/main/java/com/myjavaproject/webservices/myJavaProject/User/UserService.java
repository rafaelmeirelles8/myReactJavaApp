package com.myjavaproject.webservices.myJavaProject.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.myjavaproject.webservices.myJavaProject.User.UserRegistrationValidator.*;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User deleteUserById(long id) {
        User user = userRepository.findById(id).get();

        if(user != null) {
            userRepository.deleteById(id);
        }

        return user;
    }

    public User saveUser(User user) {
        Boolean userAlreadyExists = userRepository.usernameExists(user.getUsername());
        if(userAlreadyExists
                && user.getId() < 0) {
            throw new IllegalStateException("username: " + user.getUsername() + " already exists");
        }

        ValidatorResult apply = isAdult()
                .and(isUsernameValid())
                .apply(user);

        if(!apply.equals(ValidatorResult.SUCCESS)) {
            return null;
        }

        return userRepository.save(user);
    }

    public User getUserById(long id) {
        return userRepository.findById(id).get();
    }
}
