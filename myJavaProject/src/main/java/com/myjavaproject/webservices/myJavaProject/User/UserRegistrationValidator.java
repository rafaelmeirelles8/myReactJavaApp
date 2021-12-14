package com.myjavaproject.webservices.myJavaProject.User;

import java.util.function.Function;

import static com.myjavaproject.webservices.myJavaProject.User.UserRegistrationValidator.*;
import static com.myjavaproject.webservices.myJavaProject.User.UserRegistrationValidator.ValidatorResult.*;

public interface UserRegistrationValidator extends Function<User, ValidatorResult> {

    static UserRegistrationValidator isAdult() {
        return user -> user.getAge() > 18 ?
                SUCCESS : AGE_NOT_VALID;
    }

    static UserRegistrationValidator isUsernameValid() {
        return user -> user.getUsername().length() > 5 ?
                SUCCESS : USERNAME_NOT_VALID;
    }

    default UserRegistrationValidator and(UserRegistrationValidator other) {
        return user -> {
            ValidatorResult result = this.apply(user);
            return result.equals(SUCCESS) ?
                    other.apply(user) : result;
        };
    }



    enum ValidatorResult {
        SUCCESS,
        AGE_NOT_VALID,
        USERNAME_NOT_VALID
    }

}
