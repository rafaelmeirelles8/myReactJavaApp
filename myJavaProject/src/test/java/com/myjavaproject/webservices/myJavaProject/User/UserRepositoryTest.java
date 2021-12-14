package com.myjavaproject.webservices.myJavaProject.User;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class UserRepositoryTest {

    @Autowired
    private UserRepository underTest;

    @Test
    void findByUsername() {

        // given
        String userName = "rafael";
        
        // when
        User user = underTest.findByUsername(userName);

        // then
        assertThat(user).isNotNull();
    }
}