package com.example.employeebackend.repository;
import com.example.employeebackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository extends JpaRepository<Employee,Long>{
    
}

