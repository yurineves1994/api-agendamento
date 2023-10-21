package agenda.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Table(name = "schedulings")
@Entity(name = "schedulings")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Scheduling {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  String id;

  @NotBlank
  String title;

  @NotBlank
  String description;

  @NotBlank
  String duration;

  @NotBlank
  String clientName;

  @NotBlank
  @Email
  String clientEmail;

  @NotBlank
  String clientPhone;

  @Future
  LocalDateTime date;

  String employeeId;

  public Scheduling(String title, String description, String duration,
      String clientName, String clientEmail, String clientPhone,
      LocalDateTime date, String employeeId) {
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.clientName = clientName;
    this.clientEmail = clientEmail;
    this.clientPhone = clientPhone;
    this.date = date;
    this.employeeId = employeeId;
  }

}
