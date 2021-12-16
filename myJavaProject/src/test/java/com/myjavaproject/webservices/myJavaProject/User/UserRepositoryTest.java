package com.myjavaproject.webservices.myJavaProject.User;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class UserRepositoryTest {

    @Autowired
    private UserRepository underTest;

    @AfterEach
    void tearDown() {
        underTest.deleteAll();
    }

    @Test
    void findByUsername() {

        // given
        String userName = "rafael";

        // when
        User user = underTest.findByUsername(userName);

        // then
        assertThat(user).isNotNull();
    }

    @Test
    void usernameAlreadyExists() {
        // given
        String userName = "rafael";

        // when
        Boolean userExists = underTest.usernameExists(userName);

        // then
        assertThat(userExists).isTrue();
    }
}