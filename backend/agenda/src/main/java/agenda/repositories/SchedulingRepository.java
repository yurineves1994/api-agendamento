package agenda.repositories;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import agenda.entities.Scheduling;

public interface SchedulingRepository extends JpaRepository<Scheduling, String> {
  Collection<Scheduling> findAllByemployeeId(String employeeId);

  List<Scheduling> findByEmployeeIdAndDate(String employeeId, LocalDateTime dateFormatted);
}
