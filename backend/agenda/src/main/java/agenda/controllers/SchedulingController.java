package agenda.controllers;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;

import agenda.entities.Employee;
import agenda.entities.Scheduling;
import agenda.services.EmployeeService;
import agenda.services.SchedulingService;

@Controller
public class SchedulingController {

  @Autowired
  SchedulingService schedulingService;

  @Autowired
  EmployeeService employeeService;

  @PreAuthorize("isAuthenticated()")
  @QueryMapping
  public Collection<Employee> getAllEmployee() {
    return employeeService.findAll();
  }

  @QueryMapping
  public Optional<Employee> getEmployeeById(@Argument String id) {
    System.out.println("getEmployeeById");
    return employeeService.findById(id);
  }

  @PreAuthorize("isAuthenticated()")
  @MutationMapping
  public Employee createEmployee(@Argument String name, @Argument String document, @Argument String position) {

    return employeeService.createEmployee(name, document, position);
  }

  @MutationMapping
  public Scheduling createScheduling(@Argument String title, @Argument String description, @Argument String duration,
      @Argument String clientName, @Argument String clientEmail, @Argument String clientPhone,
      @Argument String date, @Argument String employeeId) {
    return schedulingService.createScheduling(title, description, duration,
        clientName, clientEmail, clientPhone,
        date, employeeId);
  }

  @MutationMapping
  public Boolean removeScheduling(@Argument String id) {
    return schedulingService.removeSchedulings(id);
  }

  @SchemaMapping
  public Collection<Scheduling> scheduling(Employee employee) {
    System.out.println("schedulings");
    return schedulingService.getSchedulingById(employee.getId());
  }

  @SchemaMapping
  public Collection<Employee> allEmployee(Employee employee) {
    System.out.println("allEmployee");
    return employeeService.findAll();
  }
}
