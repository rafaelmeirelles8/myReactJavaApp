package com.myjavaproject.webservices.myJavaProject.User;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;
    private UserService underTest;

    @BeforeEach
    void setUp() {
        underTest = new UserService(userRepository);
    }

    @Test
    void getUserByUsername() {
    }

    @Test
    void canGetAllUsers() {
        // when
            underTest.getAllUsers();
        // then
        verify(userRepository).findAll();

    }

    @Test
    @Disabled
    void deleteUserById() {
    }

    @Test
    void canSaveUserLowerAge() {
        //given
        User user = new User("test", 50, "testUsername", "test", new ArrayList<>());

        // when
        User savedUser = underTest.saveUser(user);

        // then
        ArgumentCaptor<User> userArgumentCaptor = ArgumentCaptor.forClass(User.class);

        verify(userRepository)
                .save(userArgumentCaptor.capture());
    }

    @Test
    void canSaveUser() {
        //given
        User user = new User("test", 50, "testUsername", "test", new ArrayList<>());

        // when
        underTest.saveUser(user);

        // then
        ArgumentCaptor<User> userArgumentCaptor = ArgumentCaptor.forClass(User.class);

        verify(userRepository)
                .save(userArgumentCaptor.capture());

        User capturedUser = userArgumentCaptor.getValue();

        assertThat(capturedUser).isEqualTo(user);
    }

    @Test
    void getUserById() {
    }
}