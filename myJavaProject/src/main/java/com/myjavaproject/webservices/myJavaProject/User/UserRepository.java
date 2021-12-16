package com.myjavaproject.webservices.myJavaProject.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    @Query("" +
            "SELECT CASE WHEN COUNT(u) > 0 THEN " +
    "TRUE ELSE FALSE END " +
    "FROM User u " +
    "WHERE u.username = ?1"
    )
    Boolean usernameExists(String username);
}
