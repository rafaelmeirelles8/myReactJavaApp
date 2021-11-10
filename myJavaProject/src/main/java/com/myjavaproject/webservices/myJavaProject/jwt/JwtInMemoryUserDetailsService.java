package com.myjavaproject.webservices.myJavaProject.jwt;

import com.myjavaproject.webservices.myJavaProject.User.User;
import com.myjavaproject.webservices.myJavaProject.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  @Autowired
  private UserRepository userRepository;

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "rafael",
        "$2a$12$yRs3vKPoUAS4dmNuZ1l2E.qKA2Dnfqr7EwBOACld/i7QtwFnEZX8G", "ROLE_USER_2"));
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUsername(username);
    if (user == null) {
      throw new UsernameNotFoundException("User not found with username: " + username);
    }

    JwtUserDetails userDetails = new JwtUserDetails(user.getId(), user.getUsername(), user.getPassword(), "ROLE_USER_2");

    return userDetails;
  }

}


