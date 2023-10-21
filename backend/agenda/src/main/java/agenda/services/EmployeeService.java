package agenda.services;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import agenda.entities.Employee;
import agenda.repositories.EmployeeRepository;

@Service
public class EmployeeService {

  @Autowired
  private EmployeeRepository employeeRepository;

  public Employee createEmployee(String name, String document, String position) {
    Employee employee = new Employee(name, document, position);

    employeeRepository.save(employee);

    return employee;
  }

  public Collection<Employee> findAll() {
    return employeeRepository.findAll();
  }

  public Optional<Employee> findById(String id) {
    Optional<Employee> employee = employeeRepository.findById(id);
    return employee;
  }

  public boolean existsById(String id) {
    return employeeRepository.existsById(id);
  }

}
