package agenda.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Controller;

import agenda.config.TokenService;
import agenda.entities.User;
import agenda.services.UserService;

@Controller
public class AuthenticationController {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private UserService userService;

  @Autowired
  private TokenService tokenService;

  @PreAuthorize("permitAll")
  @MutationMapping
  public String login(@Argument String login, @Argument String password) {
    var usernamepassword = new UsernamePasswordAuthenticationToken(login, password);

    var auth = authenticationManager.authenticate(usernamepassword);

    var token = tokenService.generateToken((User) auth.getPrincipal());

    return token;
  }

  @PreAuthorize("permitAll")
  @MutationMapping
  public User register(@Argument String login, @Argument String password, @Argument String name, @Argument String cpf,
      @Argument String phone, @Argument String birth, @Argument String role) {

    return userService.createUser(login, password, name, cpf, phone, birth, role);
  }
}
