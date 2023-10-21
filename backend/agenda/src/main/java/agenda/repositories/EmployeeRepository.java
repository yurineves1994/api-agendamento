package agenda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import agenda.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, String> {

}
