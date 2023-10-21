package agenda.services;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import agenda.entities.User;
import agenda.repositories.UserRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserService {

  private UserRepository userRepository;

  public User createUser(String login, String password, String name, String cpf,
      String phone, String birth, String role) {
    String encryptedPassword = new BCryptPasswordEncoder().encode(password);

    LocalDate birthFormatted = LocalDate.parse(birth, DateTimeFormatter.ofPattern("dd/MM/yyyy"));

    return userRepository.save(new User(login, encryptedPassword, name, cpf, phone, birthFormatted, role));
  }

}
