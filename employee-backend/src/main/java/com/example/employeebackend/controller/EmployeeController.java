package com.example.employeebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.employeebackend.model.Employee;
import com.example.employeebackend.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    public EmployeeRepository employeeRepository;
    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id){
        return employeeRepository.findById(id).orElseThrow(()->new RuntimeException("Employee not found"));
    }
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id,@RequestBody Employee updatedetails){
        Employee employee=employeeRepository.findById(id).orElseThrow(()->new RuntimeException("Employee not found"));
        employee.setFirstName(updatedetails.getFirstName());
        employee.setLastName(updatedetails.getLastName());
        employee.setEmail(updatedetails.getEmail());
        return employeeRepository.save(employee);
    }
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        employeeRepository.deleteById(id);
    }


}
