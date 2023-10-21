package agenda.services;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import agenda.entities.Scheduling;
import agenda.repositories.SchedulingRepository;

@Service
public class SchedulingService {

  @Autowired
  private SchedulingRepository schedulingRepository;

  public Scheduling createScheduling(String title, String description, String duration,
      String clientName, String clientEmail, String clientPhone,
      String date, String employeeId) {

    LocalDateTime dateTimeFormatted = LocalDateTime.parse(date, DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm"));

    int schedulingDuration = Integer.parseInt(duration);

    List<Scheduling> employeeSchedules = schedulingRepository.findByEmployeeIdAndDate(employeeId, dateTimeFormatted);

    boolean isTimeSlotAvailable = isTimeSlotAvailable(employeeSchedules, dateTimeFormatted, schedulingDuration);

    if (!isTimeSlotAvailable) {
      throw new RuntimeException("Horário indisponível para agendamento.");
    }

    Scheduling scheduling = schedulingRepository.save(new Scheduling(title, description, duration,
        clientName, clientEmail, clientPhone,
        dateTimeFormatted, employeeId));
    return scheduling;
  }

  public Collection<Scheduling> findAll() {
    return schedulingRepository.findAll();
  }

  public Boolean removeSchedulings(String id) {
    try {
      schedulingRepository.deleteById(id);
      return true;
    } catch (Exception e) {
      System.out.println(e);
      return false;
    }
  }

  public Collection<Scheduling> getSchedulingById(String employeeId) {
    Collection<Scheduling> scheduling = schedulingRepository.findAllByemployeeId(employeeId);
    return scheduling;
  }

  private boolean isTimeSlotAvailable(List<Scheduling> employeeSchedules, LocalDateTime newDateTime,
      int schedulingDuration) {
    for (Scheduling scheduling : employeeSchedules) {
      LocalDateTime existingDateTime = scheduling.getDate();

      if (Math.abs(Duration.between(existingDateTime, newDateTime).toMinutes()) < schedulingDuration) {
        return false;
      }
    }
    return true;
  }

}
